var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/app.html',
		controller:'AppCtrl',
		controllerAs:'apps',
		resolve:{
			app:function($q,$timeout,$log){
				var defer = $q.defer();
				$timeout(function(){
					defer.resolve();
				},2000);
				return defer.promise;
			}
		}
	});
});	

app.controller('AppCtrl',['$scope',function($scope){
	var self = this;

	self.model = {
		message:'Hello world!'
	};
}]);