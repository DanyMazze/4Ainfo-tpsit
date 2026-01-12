const {readFile,writeFile,appendFile}=require('fs');

readFile('./mieiFile/test.txt','utf8',(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("1 - "+result);
});
  
writeFile('./mieiFile/test.txt'," voglio scrivere questo nel file",(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("2 - "+result);
});

appendFile('./mieiFile/test.txt'," voglio aggiungere questo nel file",(error,result)=> {
   if (error) { 
      console.log(error);
      return;
   }
   console.log("3 - "+result);
});
