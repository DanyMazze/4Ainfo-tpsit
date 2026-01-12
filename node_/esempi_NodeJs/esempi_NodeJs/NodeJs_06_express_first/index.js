var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send('Hello World');
console.log('user accessing home page');
});
app.listen(5000,function(){
console.log('server running on port 5000');
})
