var app = angular.module('app', ['ngRoute']);
app.config(function($route){
	$routeProvider
	.when('/',{
		templateUrl:'pages/app.html',
		controller:'AppCtrl',
		controllerAs:'apps'
	});
});

app.controller('AppCtrl',['$scope',function($scope){
	var self = this;
	self.message = "The app route is working!";
}]);
