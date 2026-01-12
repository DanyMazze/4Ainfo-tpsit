var express = require("express");
var app = express();
var path = require('path');

const {readFileSync,appendFile}=require('fs');

function appendi(file,riga) {
   appendFile('./'+file,riga,(error,result)=> {
      if (error) {console.log(error);return; }
   });
}  

function leggi(file) {
   try {
     const data = readFileSync('./'+file, 'utf8');
     return(data);
   } catch (err) {console.error(err); }
}

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
/////

app.post("/primo", function(req,res){

   a1=parseInt(req.body.a1);
   a2=parseInt(req.body.a2);
   a3=a1+a2;
   risposta="La somma di "+a1+" e "+a2+" è "+a3+"<br><br>";
   appendi('test1.txt',risposta+'\n');
  
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write('<html>'+
   ' <body>'+
   'primo<br><br>' +    
   risposta +          
   '  <a href="/">Torna</a><br><br>'+          
   leggi('test1.txt') +          
   ' </body>'+
   '</html>');
   res.end();
});

app.post("/secondo", function(req,res){
  
   a=parseInt(Math.random()*99)+1;
   if(a%2==0){
     s="pari";
   }
   else {
     s="dispari";
   }
   risposta="Il numero casuale è "+a+" ed è "+s+"<br><br>";
     
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write('<html>'+
   ' <body>'+
   'secondo<br><br>' +          
   risposta +          
   '  <a href="/">Torna</a>'+          
   ' </body>'+
   '</html>');
   res.end();
});

app.post("/terzo", function(req,res){

   c1=req.body.c1;
   ls=c1.length;
   var dd = new Date();
   adesso = dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();
   risposta = "La stringa è "+c1+" ed è lunga "+ls+" caratteri "+adesso+"<br><br>";
   appendi('test2.txt',risposta+'\n');
  
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write('<html>'+
   ' <body>'+
   'terzo<br><br>' + 
   risposta +          
   '  <a href="/">Torna</a>'+ 
   leggi('test2.txt') +           
   ' </body>'+
   '</html>');
   res.end();
});

/////
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});