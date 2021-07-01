function MyClass(scope, model) {
    const _scope = scope;
    let _storage = new Array();
    const _model = model;

    const _local = window.localStorage;

    let _initStorage = () => {
        if( !_local.getItem(_scope) ){
            _local.setItem(_scope, JSON.stringify([]));       
        } 
        //_storage = JSON.parse(_local.getItem(_scope)) || [];
    }    

    let _persistData = () => {
        _local.setItem(_scope, JSON.stringify(_storage));
    }

    let _validateData = (item) => {
        const modelKeys = Object.keys(_model);
        modelKeys.forEach(key => {
          if(_model[key].required){
            let value = (item[key] || "") + "";
            
            if(value.trim() == '')
              throw Error(_model[key].messageError)
          }
        });
    }

    _initStorage();

    return {
        getDataByID : (ID) => {
            let data = _storage.find(item => item.ID == ID);
            return data;
        },

        saveData: (data, excluir = false) => {
            if(excluir){
                _storage = _storage.filter(item => item.ID != data.ID);
            } else {   
                if(_model){
                    _validateData(data);
                }
                        
                let objeto = _storage.find(item => item.ID == data.ID);
                                
                if( objeto == null ){
                    _storage.push(data)
                } else {
                    let keys = Object.keys(objeto);
                    keys.forEach(key => { objeto[key] = data[key] });    
                }            
            }            
            _persistData();
        } 
    }    
} 

let modeloa = {
    ID : {
        required : true,
        messageError : "Identificador não presente, informe o administrador!"
      },
      username : {
        required : true,
        messageError : "Informe o nome de  usuário!"
      },
      password : {
        required : true,
        messageError : "Informe a senha!"
      }
}

let tvDB = new MyClass("pessoa", modeloa);
tvDB.saveData({
    ID : 1678,
    username : "namee",
    password : "passwrod",
    next : "last" 
});

tvDB.saveData({
    ID : 528,
    username : "john",
    password : "qwewytr"
});
tvDB.saveData({
    ID : 525,
    username : "john2",
    password : "qwweytr"
});

console.log(localStorage['pessoa']);
tvDB.saveData({
    ID : 522,
    username : "john3",
    password : "qwr"
});

console.log(localStorage['pessoa']);










