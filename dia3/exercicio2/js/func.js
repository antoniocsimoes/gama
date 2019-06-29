let textKey = document.getElementById('txt');
console.log(textKey);

textKey.addEventListener('keydown', function(){
    let valor = textKey.value;
    console.log(valor);
    let elementP = document.getElementById('newText');
    console.log(elementP);
    elementP.innerText = valor;

});