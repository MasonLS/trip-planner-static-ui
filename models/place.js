var db = require('./index.js');
var Sequelize = require('sequelize');

var Place = db.define('place', {
	address: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
});

module.exports = Place;