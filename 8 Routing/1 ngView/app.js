
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/app.html',
		controller:'AppCtrl',
		controllerAs:'apps'
	});
});

app.controller('AppCtrl',['$scope',function(){
	var self = this;
	self.message = "The app route is working!";
}]);
