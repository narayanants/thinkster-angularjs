;(function(){
	var app = angular.module('app', []);
	app.controller('AppCtrl', ['$scope', function($scope){
		var self = this;
		self.ctrlFlavour = 'blackberry!';

	}]);

	app.directive('drink',function(){
		return{
			restrict:'A',
			scope:{},
			template:'<div>{{flavour}}</div>',
			link:function(scope,elm,attrs){
				scope.flavour = attrs.flavour;
			}
		};
	});
})(window)