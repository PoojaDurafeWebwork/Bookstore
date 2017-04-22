var myApp = angular.module('myApp');

myApp.controller('GenreController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	console.log('GenreController loaded...');

	$scope.getGenres = function(){
		console.log('in getGenres function')
		$http.get('/api/genres').then(function(response){
			$scope.genres =response.data;
			console.log($scope.genres.data)
		});
	}

	$scope.getGenre = function(){
		var id = $routeParams.id;
		$http.get('/api/genres'+id).then(function(response){
			$scope.genres =response.data;
			
		});
	}

	$scope.addGenre = function(){
		console.log('in addGenre function')
		$http.post('/api/genres',$scope.genre).then(function(response){
			window.location.href = '#/genres';
		});
	}

}]);