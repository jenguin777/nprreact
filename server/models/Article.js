
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const articleSchema = new Schema({
	// `title` is required and of type String, must be unique in order to be saved - this prevents duplicate articles from being saved
	title: {
		type: String,
		required: true,
		unique : true
	},
	// `link` is required and of type String
	link: {
		type: String,
		required: true
	},
	teaser: {
		type: String,
		required: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	publishedDate: {
		type: Date,
		default: Date.now
	}
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;