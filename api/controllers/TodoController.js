var TodoModel = require('../models/TodoModel');

function getAll(res) {
	TodoModel.find(function(err, results) {
		if (err) {
			res.status(500).json(err);
		} else {
			res.json(results);
		}
	});
}

module.exports = function(app) {

	//get all
	app.get('/api/todos', (req, res) => {
		getAll(res);
	});

	//get by id
	app.get('/api/todo/:id', (req, res) => {
		TodoModel.findById({_id: req.params.id}, function(err, result) {
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(result);
			}
		});
	});

	//create
	app.post('/api/todo', (req, res) => {
		var todo = {
			text: req.body.text,
			isDone: req.body.isDone
		}

		TodoModel.create(todo, function(err, result) {
			if (err) {
				console.log("Error: " + err.message);
			} else {
				console.log("Thêm thành công !");
				getAll(res);
			}
		});

	});

	//update
	app.put('/api/todo', (req, res) => {
		if (!req.body._id) {
			return res.status(500).send('ID is require');
		} else {
			TodoModel.update({ 
				_id: req.body._id 
			}, {
				text: req.body.text,
				isDone: req.body.isDone
			}, function (err, result) {
				if (err) {
					return res.status(500).json(err);
				} else {
					getAll(res);
				}
			});
		}
	});

	//delete
	app.delete('/api/todo/:id', (req, res) => {
		TodoModel.remove({
			_id: req.params.id
		}, function (err, result) {
			if (err) {
				return res.status(500).json(err);
			} else {
				getAll(res);
			}
		})
	})

}