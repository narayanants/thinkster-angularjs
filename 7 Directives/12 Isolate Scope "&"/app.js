var app = angular.module('app', []);
app.controller('FunCtrl', ['$scope', function($scope){
	var self = this;
	self.callHome = function(message){
		alert(message);
	};
}]);

app.directive("phone", function () {
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' +
      '<div class="button" ng-click="dial({message:value})">' +
      'Call home!</div>',
  };
});