var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();


app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(methodOverride());


//Connecting MongoDB using mongoose to our application
mongoose.connect('127.0.0.1:27017');

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + '127.0.0.1:27017');
});


var Todo = require('./todo.model');
var TodoController = require('./todo.controller')(Todo);

app.get('/api/todos', TodoController.GetTodo);

app.post('/api/todos', TodoController.PostTodo);

app.put('/api/todos/:todo_id', TodoController.UpdateTodo);

app.delete('/api/todos/:todo_id', TodoController.DeleteTodo);
    

//Express application will listen to port mentioned in our configuration
app.listen(3000, function(err){
  if(err) throw err;
  console.log("App listening on port "+3000);
});

module.exports = app;