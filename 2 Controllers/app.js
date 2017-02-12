var app = angular.module('app', []);
app.controller('MainCtrl', ['$scope', function(){
	var self = this;
	self.message = "hello";
	self.updateMessage = function(message){
		self.message = message;
	};

}]);	