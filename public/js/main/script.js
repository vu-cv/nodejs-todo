var app = angular.module('todos', ['xeditable']);
app.run(['editableOptions', 'editableThemes', function(editableOptions, editableThemes) {
	editableThemes.bs3.inputClass = 'input-sm';
	editableThemes.bs3.buttonsClass = 'btn-sm';
	editableOptions.theme = 'bs3';
  
}]);
app.controller('todoController', ['$scope', 'ServiceTodo', function($scope, TodoService){
	$scope.appName = "Node todos";
	
	$scope.formData ={}
	$scope.todos = [];
	$scope.loading = true;
	TodoService.getAll().then(function (res) {
		$scope.todos = res.data;
		$scope.loading = false;
	})

	$scope.createTodo = function () {
		$scope.loading = true;
		var todo = {
			text: $scope.formData.text,
			isDone: false
		}
		TodoService.create(todo).then(function (res) {
			$scope.todos = res.data;
			$scope.formData.text = "";
			$scope.loading = false;
			$("#text").focus();
		})

	};

	$scope.updateTodo = function (todo) {
		$scope.loading = true;
		TodoService.update(todo).then(function (res) {
			$scope.todos = res.data;
			$scope.loading = false;
		})
	}

	$scope.deleteTodo = function (todo) {
		$scope.loading = true;
		TodoService.delete(todo._id).then(function (res) {
			$scope.todos = res.data;
			$scope.loading = false;
		})
	}


}]);