const express = require('express');

const TweetCtrl = require('../controllers/tweet-ctrl');

const router = express.Router();

router.get('/tweets', TweetCtrl.getTweets);

module.exports = router;