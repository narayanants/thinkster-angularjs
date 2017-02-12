var app = angular.module('app', [])
    .directive('myComponent', function () {
        return {
            restrict:'E',
            scope:{
                /* NOTE: Normally I would set my attributes and bindings
                to be the same name but I wanted to delineate between 
                parent and isolated scope. */                
                isolatedAttributeFoo:'@attributeFoo',
                isolatedBindingFoo:'=bindingFoo',
                isolatedExpressionFoo:'&'
            }        
        };
    })
    .controller('MyCtrl', ['$scope', function ($scope) {
        $scope.foo = 'Hello!';
        $scope.updateFoo = function (newFoo) {
            $scope.foo = newFoo;
        }
    }]);


