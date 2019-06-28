let botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    console.log("funcionando");
    let valor = document.getElementById('txt');
    let valorElement = valor.value;    
    console.log(valorElement);   

    let newElement = document.createElement('p');
    let txt = document.createTextNode(valorElement);
    newElement.appendChild(txt);

    document.body.div.insertBefore(newElement, botao); 

   /* let elementP = document.getElementById('container');
    elementP.appendChild(document.createElement('p'));
    console.log(elementP);
    elementP.lastChild.innerHTML = valorElement;*/
   
});