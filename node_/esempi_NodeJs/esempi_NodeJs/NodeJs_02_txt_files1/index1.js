const {readFileSync,writeFileSync,appendFileSync}=require('fs');

a=readFileSync('./test1.txt');
console.log("1 - "+a);
  
b=writeFileSync('./test1.txt'," voglio scrivere questo nel file");
console.log("2 - "+b);


c=appendFileSync('./test1.txt'," voglio aggiungere questo nel file");
console.log("3 - "+c);


