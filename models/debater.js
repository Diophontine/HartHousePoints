var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DebaterSchema   = new Schema({
    name: String,
    points: Number,
    active: Boolean,
    results: [{ type: Schema.ObjectId, ref: 'Result' }]

});

module.exports = mongoose.model('Debater', DebaterSchema);