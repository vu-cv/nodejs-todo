app.factory('ServiceTodo', ['$http', function($http){
	return {
		getAll: function () {
			return $http({method : "GET", url : "/api/todos"});
		},
		getById: function (id) {
			return $http({method : "GET", url : `/api/todo/${id}`});
		},
		create: function (todo) {
			return $http({method : "POST", data: todo, url : "/api/todo"});
		},
		update: function (todo) {
			return $http({method : "PUT", data: todo, url : "/api/todo"});
		},
		delete: function (id) {
			return $http({method : "DELETE", url : `/api/todo/${id}`});
		},




	};
}]);