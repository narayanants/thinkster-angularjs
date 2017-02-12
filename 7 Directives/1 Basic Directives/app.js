var app = angular.module('functionalities', []);

app.directive("entering",function(){
	return function(scope,element){
		element.bind("mouseenter",function(){
			console.log("Mouse has entered!");
		});
	};	
});	

app.directive('leaving',function(){
	return function(scope,element){
		element.bind("mouseleave",function(){
			console.log("Mouse has left!");
		});
	};
});

