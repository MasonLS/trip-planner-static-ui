var db = require('./index.js');
var Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.TEXT
	},
	price: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	}
});

module.exports = Restaurant;