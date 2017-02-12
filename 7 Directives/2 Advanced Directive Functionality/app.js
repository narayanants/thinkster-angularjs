angular.module('functionalities', [])
.directive("entering", function(){
 return function(scope, element, attrs) {
      element.bind("mouseenter", function(){
        element.addClass(attrs.entering);
        console.log("Entered!");
      })
    }
})

.directive("leaving", function(){
 return function(scope, element, attrs) {
      element.bind("mouseleave", function(){
        element.removeClass(attrs.entering);
        console.log("LEft!");
      })
    }
});