var app = angular.module('app', []);
app.directive('welcome',function(){
	return {
		restrict:'E',
		template:"<div>Welcome to HELL!</div>"
	}
});

app.directive('welcomes',function(){
	return {
		link:function(){
			console.log("Howdy!");
		}
	};
});

app.directive('goodbye',function(){
	return {
		restrict: "A",
		link:function(){
			console.log('see you later');
		}
	};
});

app.directive('welcomeclass',function(){
	return {
		restrict: "C"
	};
});

app.directive('welcomecomment',function(){
	return {
		restrict:'M'
	};
});