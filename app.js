var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	swig = require('swig'),
	db = require('./models'),
	app = express(),
	router = require('./routes'),
	port = 3000;

//set up swig rendering
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.listen(port, function(){
	console.log('listening on port 3000');
	db.sync().then(function(){
		console.log('d synchronized');
	}).catch(function(err){
		console.error("there's a problem, err, err.stack")
	});
});
//serve static files
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname + '/bower_components'));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

//handle errors (only runs if routing middleware doesn't match the request)
app.use(function(req, res, next){
	var err = new Error();
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next){
	console.error(err, err.stack);
	res.status(err.status || 500);
	res.render('error', { error: err }); //write views/error.html
});
