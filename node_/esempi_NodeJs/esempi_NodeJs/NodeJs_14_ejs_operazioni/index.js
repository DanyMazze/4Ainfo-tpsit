var express = require('express');
var parser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
 
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
    var s = {
        a : req.body.a,
        b : req.body.b,
        c : req.body.c,
        b1 : req.body.b1,
        b2 : req.body.b2
    }
    res.render('home',{
        somma : s,
        topicHead : 'Operazioni'
    });
     
});
app.listen(5000,function(){
    console.log('server running on port 5000');
})
