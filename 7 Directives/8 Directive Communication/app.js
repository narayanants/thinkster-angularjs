;(function(){
	var app = angular.module('app',[]);
	app.directive('country',function(){
		return {
			restrict:'E',
			controller:function(){
				this.makeAnnouncement = function(message){
					console.log("country says: " + message);
				}
			}
		};
	});
	app.directive('state',function(){
		return {
			restrict:'E',
			controller:function(){
				this.makeLaw = function (law) {
					console.log('Law says: ' + law);
				}
			}
		}
	});

	app.directive('city',function () {
		return {
			restrict:'E',
			require:['^country','^state'],
			link:function(scope,elm,attrs,ctrls){
				ctrls[0].makeAnnouncement('This country rocks');
				ctrls[1].makeLaw('This city rocks!');
			}
		};	
	});
})(window)