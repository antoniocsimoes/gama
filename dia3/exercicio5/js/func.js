

let arrayFrutas = [{nome: "banana", imagem: "banana.jpg"}, 
{nome: "maçã", imagem: "maca.jpg"},
{nome: "uva", imagem: "uva.jpg"},
{nome: "pêra", imagem: "pera.jpg"},
{nome: "laranja", imagem: "laranja.jpg"}];

let botao = document.getElementById('botao');
let img = document.getElementById('frutas');

let sorteado = [];

botao.addEventListener('click', function(){
    let rand = Math.floor(Math.random() * 5);
    if(sorteado.length >= arrayFrutas.length)
        sorteado = [];
        
    while (sorteado.includes(rand)){
        rand = Math.floor(Math.random() * 5);        
    }
    sorteado.push(rand);
    console.log(sorteado);
    img.src = "img/" + arrayFrutas[rand].imagem;    
});