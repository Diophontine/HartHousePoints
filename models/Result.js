var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResultSchema   = new Schema({
    Tournment: {type: Schema.ObjectId, ref: 'Tournament'},
    Debater: {type: Schema.ObjectId, ref: 'Debater'},
    level: Number,
    debater_rank: Number,
    team_rank: Number
});

module.exports = mongoose.model('Result', ResultSchema);