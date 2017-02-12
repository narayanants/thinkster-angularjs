/*
	Welcome directive has a controller that is used by other directives as an API
*/


var app = angular.module('functionalities', []);
app.directive("welcome",function(){
	return {
		restrict:"E",
		scope:{},
		controller:function($scope){
			$scope.words = [];
			this.sayHowdy = function(){
				$scope.words.push('Howdy!');
			};
			this.sayHi = function(){
				$scope.words.push('Hi!');
			};
			this.sayHello = function(){
				$scope.words.push('Hello!');
			};
		},
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(){
				console.log(scope.words);
			});
		}
	};
});

app.directive('hello',function(){
	return {
		require:'welcome',
		link:function(scope,element,attrs,welcomeCtrl){
			welcomeCtrl.sayHello();
		}
	}	
});

app.directive('hi',function(){
	return {
		require:'welcome',
		link:function(scope,element,attrs,welcomeCtrl){
			welcomeCtrl.sayHi();
		}
	}	
});

app.directive('howdy',function(){
	return {
		require:'welcome',
		link:function(scope,element,attrs,welcomeCtrl){
			welcomeCtrl.sayHowdy();
		}
	}	
});