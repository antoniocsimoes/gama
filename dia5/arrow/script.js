// como podemos fazer uma função assim?
// sumAll(1,2,3,4...n) = 10

var equipe = {
    nome: "Avanade",
    integrantes: ["Marcos", "Tatiana", "Vitória", "Carolina"],
    mostrarIntegrantes: function() {
      this.integrantes.forEach(integrante =>  {
        console.log(integrante + " é membro do time " + this.nome);
      })
    }
  }
  
  equipe.mostrarIntegrantes();