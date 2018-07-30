var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Defining schema for our Todo API
var TodoSchema = Schema({
  todo: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_by: {
    type: Date,
    default: Date.now
  }
});
//Exporting our model
var TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;