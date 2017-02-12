var app = angular.module('functionalities', []);
app.controller('FunCtrl', ['$scope', function($scope){
	var self = this;
	self.start = function(){
		console.log('fun times have started!');
	}
}]);

app.directive('entering',function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			scope.$apply(attrs.entering);
		});	
	};
});