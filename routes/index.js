var router = require('express').Router();

var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Activity = require('../models/hotel');
var Restaurant = require('../models/hotel');
var Promise = require('bluebird');

router.get('/', function(req, res, next){
	var gettingHotel = Hotel.findAll({include: [Place]});
	var gettingActivity = Activity.findAll({include: [Place]});
	var gettingRestaurant = Restaurant.findAll({include: [Place]});

	Promise.all([gettingHotel, gettingActivity, gettingRestaurant]).then(function(values){
		res.render('index', {
			hotels: values[0],
			activities: values[1],
			restaurants: values[2]
		});
	}).catch(next);
});

module.exports = router;