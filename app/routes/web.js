module.exports = function(app) {
	var express = require('express');
	//map statics
	app.use(express.static(__dirname + './../../client'));

	//route index
	app.get('/', function (req, res) {
		res.render('index');
	});

	//route consult
	app.get('/resultsearch', function(req,res) {
		var request = require('request');

		var options = {
			url: 'https://api.github.com/?access_token=abeabc08fd655a774ae225f28ea604d8bc19ab36',
			url: 'https://api.github.com/users/fernandoferrazb',
			headers: {
				'User-Agent': 'request'
			}
		};

		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				var gitConsult = JSON.parse(body);
				res.render('resultSearch', {
					gitConsult
				});
				console.log(gitConsult);
			}
		}
		request(options, callback);
	});
}