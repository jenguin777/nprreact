
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const articleSchema = new Schema({
	
	title: { type: String, required: true },
	url: { type: String, required: true },
	saved: { type: Boolean, default: false },
	summary: {type: String, required: true},
	date: { type: Date, required: true }
	
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;