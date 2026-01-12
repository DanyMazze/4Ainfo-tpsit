//const {readFile,writeFile,appendFile}=require('fs');
const {appendFile}=require('fs');

const person1=require("./person1.js");
const person2=require("./person2.js");

console.log(person1);
console.log(person2);

/*
readFile('./mieiFile/test.txt','utf8',(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("1 - "+result);
});

writeFile('./mieiFile/test.txt',"1 file dati CHAT \n" ,(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("2 - "+result);
});
*/

let persona1=person1.fullName();
let persona2=person2.fullDataString();

appendFile('./mieiFile/test.txt',persona1,(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("3.1 - "+result);
});

appendFile('./mieiFile/test.txt',persona2,(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("3.2 - "+result);
});

