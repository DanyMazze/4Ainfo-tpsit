const nome="pippo";
const nome1="ciccio";
const persona=require('./persona');
const utils=require('./utils');

if(nome=="marco") {
   console.log("ciao "+nome);
}
else
{
  console.log("non ti conosco");
}  
for(i=0;i<5;i++) {
  console.log(i+" ");
}

console.log(persona.nome4);
console.log(nome1);

utils.saluta("gigi");
s=utils.inverti("ribalta la frase");
console.log(s);