module.exports = function(){
	var express = require('express');

	//assign the dust engine to .dust files
	var app = express();
	var cons = require('consolidate');
	app.engine('dust', cons.dust);
	app.set('view engine', 'dust');
	app.set('views', __dirname + '/../views');

	//module routes
	var routes = require('../app/routes/routes');
	routes(app);

	//server local
	app.listen(8000, function () {
		console.log('localhost:8000')
	});
}