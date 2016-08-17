var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

module.exports = db;

var Place = require('./place.js');

require('./hotel.js').belongsTo(Place);
require('./restaurant.js').belongsTo(Place);
require('./activity.js').belongsTo(Place); 