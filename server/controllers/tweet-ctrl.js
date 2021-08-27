const Tweet = require('../models/tweet-model');

const getTweets = async (req, res) => {
    await Tweet.find({}, (err, tweets) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tweets.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tweet not found` })
        }
        return res.status(200).json({ success: true, data: tweets })
    }).catch(err => console.log(err))
};

const getTweetId = async (req, res) => {
    await Tweet.find(req.params, (err, tweets) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tweets.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tweet not found` })
        }
        return res.status(200).json({ success: true, data: tweets })
    }).catch(err => console.log(err))
};

module.exports = {
	getTweets,
    getTweetId
};