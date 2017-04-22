var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	console.log('BooksController loaded...');
	
	$scope.getBooks = function(){
		console.log('in books js ')
		$http.get('/api/books').then(function(response){
			$scope.books = response;
			console.log($scope.books.data);
			
		});
	}

	$scope.getBook = function(){
		console.log('in book js ');
		var id = $routeParams.id;
		$http.get('/api/books/'+id).then(function(response){
			$scope.book = response;
			console.log("Book in Id="+id);

			console.log("----"+$scope.book.data);
			
		});
	}

}]);