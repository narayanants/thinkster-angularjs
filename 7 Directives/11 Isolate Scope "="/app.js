var app = angular.module('app', []);
app.controller('AppCtrl', ['$scope', function($scope){
	var self = this;
	self.ctrlFlavor = 'blackberry';
}]);

app.directive('drink',function(){
	return {
		scope:{
			flavor:'='
		},
		template:"<input type='text' ng-model='flavor'>"
	};
});