var myApp=angular.module('myApp',['ngRoute']);
console.log('i am in app js');
myApp.config(function($routeProvider,$locationProvider){
	 $locationProvider.hashPrefix('');
	$routeProvider.when('/',{
		controller:'BooksController',
		templateUrl:'views/books.html'
	})
	.when('/books',{
		controller:'BooksController',
		templateUrl:'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl:'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl:'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl:'views/edit_book.html'
	}).when('/genres/genre',{
		controller:'GenreController',
		templateUrl:'views/genre.html'
	}).when('/genres/add',{
		controller:'GenreController',
		templateUrl:'views/add_genre.html'
	})
	.otherwise({
		redirectTo :'/'
	});

	//$locationProvider.html5Mode(true);
});
