const express = require('express');

const TweetCtrl = require('../controllers/tweet-ctrl');
const CommentCtrl = require('../controllers/comment-ctrl')

const router = express.Router();

router.get('/tweets', TweetCtrl.getTweets);
router.get('/tweets/:tweet_id', TweetCtrl.getTweetId);
router.get('/comments', CommentCtrl.getComments);
router.get('/comments/:tweet_id', CommentCtrl.getCommentId);

module.exports = router;