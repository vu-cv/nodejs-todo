var mongoose = require('mongoose');
var Schema = mongoose.Schema;

TodoSchema = new Schema({
	text: String,
	isDone: Boolean,
});

var TodoModel = mongoose.model('todos', TodoSchema);

module.exports = TodoModel;