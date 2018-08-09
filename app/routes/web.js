module.exports = function(app) {
	var express = require('express');
	//map statics
	app.use(express.static(__dirname + './../../client'));
	
	//authentication api github
	app.get('/auth', function(req,res) {
		var request = require('request');
		var authgithub = 'https://api.github.com/?access_token=abeabc08fd655a774ae225f28ea604d8bc19ab36';
		request(authgithub, {
			headers: {
				'User-Agent': 'request'
			}
		}).pipe(res);
	});

	//route index
	app.get('/', function (req, res) {
		res.render('index');
	});

	//route consult with proxy
	app.get('/result', function(req,res) {
		var request = require('request');
		var newurl = `https://api.github.com/users/${req.query.search}`;
		request(newurl, {
			headers: {
				'User-Agent': 'request'
			}
		}).pipe(res);
	});
}