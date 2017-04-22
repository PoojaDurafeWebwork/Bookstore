var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//use as a static folder
app.use(express.static(__dirname+'/client'));
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/node_modules', express.static('node_modules'));
//middleware to intialize body-parser
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('Please use1 /api/books or /api/genre');
});
// get data
app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});
// add data
app.post('/api/genres',function(req,res){
	var genre = req.body;

	Genre.addGenre(genre,function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
//update data
app.put('/api/genres/:_id',function(req,res){
	var id =req.params._id;
	var genre = req.body;

	Genre.updateGenre(id,genre,{},function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
// detete data
app.delete('/api/genres/:_id',function(req,res){
	var id =req.params._id;
	//var genre = req.body;

	Genre.deleteGenre(id,function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});
app.get('/api/books',function(req,res){
	Book.getBooks(function(err,books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id',function(req,res){
	Book.getBookById(req.params._id,function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
})

app.post('/api/books',function(req,res){
	var book = req.body;

	Book.addBook(book,function(err,genre){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id',function(req,res){
	var id =req.params._id;
	var book = req.body;

	Book.updateBook(id,book,{},function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});
app.delete('/api/books/:_id',function(req,res){
	var id =req.params._id;
	//var book = req.body;

	Book.deleteBook(id,function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Server is running on port 3000....');