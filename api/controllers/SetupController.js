var TodoModel = require('../models/TodoModel');

module.exports = function (app) {
	app.get('/api/setup', (req, res) => {
		var setTodo = [
			{text: 'Học nodejs', isDone: false},
			{text: 'Học angular', isDone: false},
			{text: 'Viết ứng dụng', isDone: false},
		];

		TodoModel.create(setTodo, function(err, result) {
			if (err) {
				console.log("Error: " + err.message);
			} else {
				console.log("Thêm thành công !");
				res.send(result);
			}
		})
	});
}