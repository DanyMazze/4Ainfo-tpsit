var express = require('express');
var parser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
const fs = require('fs');

var app = express();
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
 
app.use(function(req,res,next){
    res.locals.filejson = null;
    next();
})
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'.'))
 
app.get('/',function(req,res){
    res.render('home',{
        topicHead : 'Lettura file JSON'
    });
    console.log('user accessing Home page');
});
app.post('/leggi',function(req,res){
	
    file_path = req.body.fname;
	
    if (fs.existsSync(file_path)) {
      jString=JSON.parse(fs.readFileSync(file_path));
      Object.keys(jString).forEach(key => {
         console.log(key, jString[key]);
      });
    }
	
    res.render('home',{
        filejson : jString,
        topicHead : file_path
    });
     
});
app.listen(3000,function(){
    console.log('server running on port 3000');
})

async function readFile  (filePath) {
      try {
        const data = await fs.promises.readFile(filePath, 'utf8')
        return JSON.parse(data)
      }
     catch(err) {
         return false;
      }
    }

