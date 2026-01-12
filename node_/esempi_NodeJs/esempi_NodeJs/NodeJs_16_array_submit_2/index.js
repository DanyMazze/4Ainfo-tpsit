var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.locals.valore = null;
    next();
})
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app_views'))
 
app.get('/',function(req,res){
    res.render('home',{
        topicHead : 'Premuto',
    });
});
app.post('/valore',function(req,res){
 
   console.log(req.body);
  
   Object.keys(req.body).forEach(key => {
        console.log(key, req.body[key]);
        if(key.substr(0,1)=="z") {
           a=req.body[key];
        }
   });
 
   res.render('home',{
        valore : a,
        topicHead : 'Premuto'
   });
});

app.listen(5000,function(){
    console.log('server running on port 5000');
})
