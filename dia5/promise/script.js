function obtemDadosDoUsuario() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        var usuario = {
          nome: "Marcela",
          idade: 55,
          email: "marcelapazeamor@gmail.com"
        };
  
        resolve(usuario);
      }, geraTempoAleatorio(5));
    })
  }
  
  function obtemSaldoBancario(usuario) {
    return new Promise((resolve, reject) => {
      if(!usuario) reject("undefined is not a function")
      
      setTimeout(() => {
        let saldo = {
          saldo: 3000
        };
  
        resolve({usuario, saldo});
      }, geraTempoAleatorio(5))
    })
  }
  
  function obtemInvestimentos(usuario) {
    return new Promise((resolve, reject) => {
      if(!usuario) reject("undefined is not a function")
      setTimeout(function() {
        var investimentos =  {
          cdb: 1000,
          tesouroDireto: 8000,
          lci: 50000
        };
  
        resolve(investimentos);
      }, geraTempoAleatorio(5))
    })
    
  }
  
  function geraTempoAleatorio(range) {
    return Math.floor(Math.random() * range + 1) * 1000;
  }
  
  
  /** o que precisamos fazer para que o código funcione? 
   * 
   * ps: não podemos mexer no setTimeout, eles simulam o tempo que
   * a requisição na internet demora para responder.
   * 
  */
  function imprimeDadosDoUsuario() {
    let promiseUsuario = obtemDadosDoUsuario();
    promiseUsuario
      .then(usuario => {
        console.log("Dados: \n", usuario);
        return obtemSaldoBancario(usuario);
      })
      .then(({usuario, saldo}) => {
        console.log("Saldo: \n", saldo);
        return obtemInvestimentos(usuario);
      })
      .then(investimentos => console.log("Investimentos: \n", investimentos))
      .catch(err => console.log(err))
    
    
    /*
    obtemDadosDoUsuario(function(usuario) {
      console.log("Dados: \n", usuario);
      obtemSaldoBancario(usuario, function(saldo){
        console.log("Saldo: \n", saldo);
        obtemInvestimentos(usuario, function(investimentos) {
          console.log("Investimentos: \n", investimentos);
        });
      });
    });
    */
  
  }
  
  imprimeDadosDoUsuario();