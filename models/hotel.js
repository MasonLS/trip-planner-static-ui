var db = require('./index.js');
var Sequelize = require('sequelize');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
	},
	num_stars: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.TEXT
	}
});

module.exports = Hotel;