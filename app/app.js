var express = require('express');
var cons = require('consolidate');
var app = express();

// assign the dust engine to .dust filess
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/../views');

app.get('/',function(req,res){
	res.render('index');
});

app.listen(8000, function(){
	console.log('localhost:8000')
});