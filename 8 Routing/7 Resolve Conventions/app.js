var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/app.html',
		controller:'AppCtrl',
		controllerAs:'apps',
		resolve:{
			loadData: appCtrl.loadData,
			prepData: appCtrl.prepData
			}
	});
});	

var appCtrl = app.controller('AppCtrl',['$scope','$log','$route',function($scope,$log,$route){
	var self = this;

	$log.info($route);

	self.model = {message:'I\'m great!'};
}]);

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve("loadData"); 
  }, 2000);
  return defer.promise;
};

appCtrl.prepData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve("prepData"); 
  }, 2000);
  return defer.promise;
};