var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TournanmentSchema   = new Schema({
    name: String,
    level: Number,
    date:Date,
    teams: Number,
    debaters:Number
});

module.exports = mongoose.model('Tournment', TournanmentSchema);