const express = require('express');

const TweetCtrl = require('../controllers/tweet-ctrl');

const router = express.Router();

router.get('/tweets', TweetCtrl.getTweets);
router.get('/tweets/:tweet_id', TweetCtrl.getTweetId);

module.exports = router;