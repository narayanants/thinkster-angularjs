var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "pages/app.html",
      controller: "AppCtrl",
      controllerAs: "apps"
    }
  )
  .when('/cookies',
    {
      template: "NOM NOM NOM NOM"
    }
  )
  .otherwise({
    template: "This route isn't set!"
  });
})

app.controller('AppCtrl',['$scope',function(){
	var self = this;
	self.message = "The app route is working!";
}]);
