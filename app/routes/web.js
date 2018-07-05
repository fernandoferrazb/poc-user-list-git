module.exports = function(app) {
	var express = require('express');
	//map statics
	app.use(express.static(__dirname + './../../client'));
	app.get('/', function (req, res) {
		res.render('index');
	});
}