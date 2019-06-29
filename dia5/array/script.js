var alunos = [
    {nome: 'Felipe M.', sexo: 'M', idade: 13},
    {nome: 'Luíza A.', sexo: 'F', idade: 14},
    {nome: 'Marcos T.', sexo: 'M', idade: 14},
    {nome: 'Bianca B.', sexo: 'F', idade: 13},
    {nome: 'Rogério R.', sexo: 'M', idade: 15},
   ];
   
   // listar na tela todos os nomes ok
   // dobrem a  idade ok
   // filtrar somente para o sexo F ok
   // encontrar um registro (Bianca B.) ok
   // verificar se TODOS atendem critério (idade > 14) ok
   // verificar se alguma atende critério de ter maior de 18 anos ( idade > 18) ok
   
   alunos.forEach(function(item){
     console.log(item.nome);  
   });
   
   alunos.map(function(item){
     //item.idade = item.idade * 2;
     //return item;
     return item.idade * 2;
     console.log(item.idade);
   });
   
   
   alunos.filter(function(item){
     return item.sexo == 'F';
     console.log(item.sexo);
   });
   
   alunos.find(function(item){
     return item.nome == 'Bianca B.';
     console.log(item.nome);
   });
   
   alunos.every(function(item){
     return item.idade > 14;
     console.log(item.idade);
   });
   
   alunos.some(function(item){
     return item.idade >= 18;
     console.log(item.idade);
   });
   