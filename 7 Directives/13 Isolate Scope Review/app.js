var app = angular.module('app', []);
app.controller('FunCtrl', ['$scope', function($scope){
	var self = this;

	self.leaveVoiceMail = function(number,message){
		alert('Number: '+number+' Message: ' + message);
	}
}]);

app.directive('phone',function(){
	return{
		restrict:'E',
		scope:{
			number:'@',
			network:'=',
			makeCall:'&'
		},
		link:function(scope){
			scope.networks = ["Verizon", "AT&T", "Sprint"];
			scope.network = scope.networks[0];
		}
	}
});