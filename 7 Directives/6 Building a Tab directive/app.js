// Immediately invoked function execution

;(function(){
	var app = angular.module('app', []);
	app.directive('tab',function(){
		return {
			restrict:"E",
			require:'^tabset', // ^ move up the hierarchy and look for the controller on tabset.
			transclude:true,
			template:'<h2>Hello world!</h2> <div role="tabpanel" ng-show="active" ng-transclude></div>',
			scope:{
				heading:'@' // able to access the heading property in the element. @ means scope property must be a string
			},
			link: function(scope, elem, attr, tabsetCtrl) {
			  scope.active = false;
			  scope.disabled = false;
			  if(attr.disable) {
			    attr.$observe('disable', function(value) {
			      scope.disabled = (value !== 'false');
			    })
			  }

			  tabsetCtrl.addTab(scope);
			}
		}
	});
	app.directive('tabset',function(){
		return {
			restrict:"E",
			transclude:true,
			scope:{}, // whatever inside this will be automatically accessible inside controller.
			templateUrl:'tabset.html',
			bindToController:true,
			controllerAs:'tabset',
			controller:function(){
				var self = this;
				self.tabs = [];
				self.addTab = function(tab){
					self.tabs.push(tab);
					if(self.tabs.length === 1){
						tab.active = true;
					}
				};
				self.select = function(selectedTab) {
				  if(selectedTab.disabled) { return }

				  angular.forEach(self.tabs, function(tab) {
				    if(tab.active && tab !== selectedTab) {
				      tab.active = false;
				    }
				  })

				  selectedTab.active = true;
				}
			}
		}
	});
})(window);
