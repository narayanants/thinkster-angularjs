var app = angular.module('app', []);
app.controller('ExampleController', ['$scope', function(){
	var self = this;
	self.master = {};
	self.update = function(user){
		self.master = angular.copy(user);
	};
	self.reset = function(){
		self.user = angular.copy(self.master);
	};
	self.reset();
}]);