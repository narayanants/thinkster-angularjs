var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when("/:firstName/:middleName/:lastName",
    {
      templateUrl: "pages/app.html",
      controller: "AppCtrl",
      controllerAs: "apps"
    }
  );
});

app.controller('AppCtrl',['$scope','$routeParams',function($scope,$routeParams){
	var self = this;
	self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
}]);
