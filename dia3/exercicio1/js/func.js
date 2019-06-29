let botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    console.log("funcionando");
    let valor = document.getElementById('txt');
    let valorElement = valor.value;    
    let newElement = document.createElement('p');
    newElement.innerText = valorElement;

    let elementP = document.getElementById('container');
    elementP.appendChild(newElement);
    console.log(elementP);
    console.log(newElement);

    
    
   
});