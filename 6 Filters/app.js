

var app = angular.module('app', []);
app.filter('smallcase',function(){
	return function(item){
		return item.toLowerCase();
	}
});

app.filter('bigcase',function(){
	return function(item){
		return item.toUpperCase();
	}
});

app.controller('TestCtrl',['$scope',function(){
	var self = this;
	self.myString = 'Hello world!';
	self.friends = [
		{
        name: "Eric Simons",
        born: "Chicago"
	      },
	      {
	        name: "Albert Pai",
	        born: "Taiwan"
	      },
	      {
	        name: "Matthew Greenster",
	        born: "Virginia"
	      }
	];
}]);

app.filter('makeUpperCase',function(){
	return function(item){
		return item.toUpperCase();
	}
});
app.filter('makeLowerCase',function(){
	return function(item){
		return item.toLowerCase();
	}
});

app.controller('PersonCtrl',['$scope',function(){
	var self = this;
	self.username = 'Narayanan';
}]);


app.controller('RepeatCtrl', ['$scope', function(){
	var self = this;
	self.friends = [
		{
    	name: 'Andrew'        
	  }, {
	    name: 'Will'
	  }, {
	    name: 'Mark'
	  }, {
	    name: 'Alice'
	  }, {
	    name: 'Todd'
	  }
	];
}]);

/*app.filter('startsWithA',function(){
	return function(items){
		var filtered = [];
		for(var i =0;i<items.length;i++){
			var item = items[i];
			if (/a/i.test(item.name.substring(0, 1))) {
	        	filtered.push(item);
	      	}
		}
		return filtered;
	}
});*/

app.filter('startsWithA',function(){
	return function(items){
		return items.filter(function(item){
			return /a/i.test(item.name.substring(0,1));
		});
	};
});

/*Filter for repeats with arguments */

app.filter('startsWithLetter',function(){
	return function(items,letter){
		var filtered = [];
		var letterMatch = new RegExp(letter,'i');
		for(var i=0;i<items.length;i++){
			var item = items[i];
			if(letterMatch.test(item.name.substring(0,1))){
				filtered.push(item);
			}
		}
		return filtered;
	};
});


app.controller('ArgCtrl',['$scope',function(){
	var self = this;
	self.friends = [
		{
    	name: 'Andrew'        
	  }, {
	    name: 'Will'
	  }, {
	    name: 'Mark'
	  }, {
	    name: 'Alice'
	  }, {
	    name: 'Todd'
	  }
	];
}]);

/* Filter 4: Controller/$scope filter */

app.controller('CheatCtrl',['$scope',function(){
	var self = this;
	self.startsWithW = function(item){
		return /w/i.test(item.name.substring(0,1));
	}
	self.friends = [{
		    name: 'Andrew'        
		  }, {
		    name: 'Will'
		  }, {
		    name: 'Mark'
		  }, {
		    name: 'Alice'
		  }, {
		    name: 'Todd'
		  }];
}]);
