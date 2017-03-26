var app = angular.module('app', []);
app.controller('MainCtrl', ['$scope', function(){
	var self = this;
	self.message = "hello";
	self.updateMessage = function(message){
		self.message = message;
	};

}]);	

var app = angular.module(''app, []);
app.controller('MainCtrl',['$scope',function($scope){
	var self = this;
	self.message = 'Hello';
	self.updateMessage = function(message){
		self.message = message;
	}
}]);