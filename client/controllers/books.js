var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	console.log('BooksController loaded...');
	
	$scope.getBooks = function(){
		console.log('in books js ')
		$http.get('/api/books').then(function(response){
			$scope.books =response.data;
			console.log($scope.books);			
		});
		
	}

	$scope.getBook = function(){
		console.log('in book js ');
		var id = $routeParams.id;
		$http.get('/api/books/'+id).then(function(response){
			$scope.book = response.data;
			console.log("Book in Id="+id);

			console.log('get',$scope.book.title);
			
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		//var id = $routeParams.id;
		$http.post('/api/books/',$scope.book).then(function(response){
			window.location.href = '#/books';
			
		});
	}
	$scope.updateBook = function(){
		console.log($scope.book);
		var id = $routeParams.id;
		$http.put('/api/books/'+id,$scope.book).then(function(response){
			window.location.href = '#/books';
			
		});
	}
	$scope.removeBook = function(id){
		console.log($scope.book);
		
		$http.delete('/api/books/'+id).then(function(response){
			window.location.href = '#/books';
			
		});
	}
}]);