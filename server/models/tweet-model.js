const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tweet = new Schema(
	{
		tweet_id: {type: Number, required: true},
		img: { type: String, required: true},
		secure_img: { type: String },
		date: { type: String },
		user_count: { type: Number },
		text_string: { type: String }
});

module.exports = mongoose.model('tweets', Tweet);
