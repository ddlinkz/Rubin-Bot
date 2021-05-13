const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tweet = new Schema(
	{
		tweet_id: {type: Number, required: true}
	}
);

module.exports = mongoose.model('tweets', Tweet);


// const Tweet = new Schema(
// 	{
// 		tweet_id: {type: Number, required: true},
// 		img: { type: String, required: true},
// 		secure_img: { type: String, required: true},
// 		date: { type: String, require: true},
// 		user_count: { type: Number, require: true},
// 		text_string: { type: String, require: true},
// 	},
// 	{ timestamps: true},
// );
