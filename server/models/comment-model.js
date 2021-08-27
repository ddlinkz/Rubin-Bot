const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
	{
		tweet_id: {type: Number, required: true},
		author: {type: String, required: true},
		content: {type: String, required: true},
		posted_on: String
	},
	{ collection: 'comments'}
);

module.exports = mongoose.model('comments', Comment);
