

function getApi(url,callback){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       callback(JSON.parse(xhttp.responseText))
      }      
    }
    xhttp.open("GET", url, true)
    xhttp.send();
}  


var botao = document.getElementById('btn');
botao.addEventListener('click', function() {
  var nome = document.getElementById('nome').value;
  getApi('https://pokeapi.co/api/v2/pokemon/' + nome,function (res) {
    console.log(res);  
   var frase = document.getElementById('frase');
   frase.innerText = res.weight;
  })
});
