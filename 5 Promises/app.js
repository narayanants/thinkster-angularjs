function getData($timeout,$q){
	return function(){
		return $q(function(resolve,reject){
			var defer = $q.defer();
			$timeout(function(){
				resolve(Math.floor(Math.random() * 2));
			},2000);
		});
	}
}

var app = angular.module('app', []);
app.factory('getData',getData)
.run(function(getData){
	var promise = getData()
	.then(function(num){
		console.log(num);
		return num * 2;
	})
	.then(function(num){
		console.log(num); // = random number * 2;
	});
});