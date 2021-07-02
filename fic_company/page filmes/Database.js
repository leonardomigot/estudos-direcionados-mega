const STORAGE = localStorage;

function Database(scope) {
  let _scope = scope;
  let _volatileStorage = [];

  // INIT STORAGE
  let _initStorage = () => {
    if ( !STORAGE.getItem(_scope) ) {       
      STORAGE.setItem(_scope, JSON.stringify([])); 
    }
    _volatileStorage = JSON.parse(STORAGE.getItem(_scope));
  } 
  _initStorage();

  // PERSIST STORAGE
  let _persist = () => {
    STORAGE.setItem(_scope, JSON.stringify(_volatileStorage)); // ("Escopo", [Dados])
  }

  // METHODS
  return {

    // WRITE ENTRY DATA TO DATABASE
    writeEntry: (data) => {

      let objeto = _volatileStorage.find(item => item.id == data.id);
      if (objeto == null){
        _volatileStorage.push(data);
      } else {
        let keys = Object.keys(objeto);
          keys.forEach(key => {
            objeto[key] = data[key]
          });
      }
      // PERSIST DATA
      _persist();
    },

    // DELETE ENTRY
    deleteEntry: (id) => {
      _volatileStorage = _volatileStorage.filter(item => item.id != id);
      _persist();
    }

    //


  }
}


