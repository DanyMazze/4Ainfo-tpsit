var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.locals.somma = null;
    next();
})
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app_views'))
 
app.get('/',function(req,res){
    res.render('home',{
        topicHead : 'Operazioni',
    });
});
app.post('/somma',function(req,res){
 
   console.log(req.body);
 
   var s = req.body;
  
    res.render('home',{
        somma : s,
        topicHead : 'Operazioni'
    });
});

app.listen(5000,function(){
    console.log('server running on port 5000');
})
