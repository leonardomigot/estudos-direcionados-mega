const STORAGE = localStorage;

function Database(scope){
    let _scope = scope;
    let _volatileStorage = [];
    
    // INIT STORAGE
    let _initStorage = () => {
        if ( !STORAGE.getItem(_scope) ){
            STORAGE.setItem(_scope, JSON.stringify([])); // ("Escopo", [])
        }
    }
    _initStorage();

    // PERSIST STORAGE
    let _persist = () => {
        STORAGE.setItem(_scope, JSON.stringify(_volatileStorage)); // ("Escopo", [Dados])
    }

    // METHODS
    return {
        addEntry : (data, deletion = false) => {
           
            let objeto = _volatileStorage.find(item => item.ID == data.ID);

            if( objeto == null ){
                _volatileStorage.push(data);
            } else {
                let keys = Object.keys(objeto);
                keys.forEach(key => {
                objeto[key] = data[key]
                });
            }
              
            _persist()
        }
    }    
}