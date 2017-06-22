// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var SavedArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Create the SavedArticle model with the SavedArticleSchema
var SavedArticle = mongoose.model("SavedArticle", SavedArticleSchema);

// Export the model
module.exports = SavedArticle;
