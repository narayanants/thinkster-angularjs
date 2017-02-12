;(function(){
	var app = angular.module('app',[]);
	app.controller('ChoreCtrl',['$scope',function($scope){
		var self = this;
		self.logChore = function(chore){
			alert(chore+' is done!');
		}
	}]);
	app.directive('kid',function(){
		return {
			restrict:'E',
			scope:{
				done:'&'
			},
			template:'<input type="text" ng-model="chore"/>{{chore}}' + '<button class="button" ng-click="done({chore:chore})">I\'m done</div>'
		};
	});
})(window);