const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageView = new Schema(
	{
		route: {type: String, required: true},
		view_count: {type: Number, default: 0, required: true},
		tweet_id: {type: Number}
	},
	{ collection: 'pageview'}
);

module.exports = mongoose.model('pageviews', PageView);
