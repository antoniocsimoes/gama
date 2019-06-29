let textKey = document.getElementById('txt');

let arrayFrutas = [{nome: "banana", imagem: "banana.jpg"}, 
{nome: "maçã", imagem: "maca.jpg"},
{nome: "uva", imagem: "uva.jpg"},
{nome: "pêra", imagem: "pera.jpg"},
{nome: "laranja", imagem: "laranja.jpg"}];

let img = document.getElementById('frutas');


textKey.addEventListener('keyup', function(){
    let valor = textKey.value;    
    for(var i=0; i<arrayFrutas.length;i++){        
        if(valor==arrayFrutas[i].nome)
            img.src = "img/" + arrayFrutas[i].imagem;       
    }
});