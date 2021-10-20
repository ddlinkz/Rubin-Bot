const express = require('express');

const TweetCtrl = require('../controllers/tweet-ctrl');
const CommentCtrl = require('../controllers/comment-ctrl');
const PageViewCtrl = require('../controllers/pageview-ctrl');

const router = express.Router();

router.get('/tweets', TweetCtrl.getTweets);
router.get('/tweets/:tweet_id', TweetCtrl.getTweetId);
router.get('/comments', CommentCtrl.getComments);
router.get('/comments/:tweet_id', CommentCtrl.getCommentId);
router.get('/pageview/:route', PageViewCtrl.getPageView);

router.post('/comments/', CommentCtrl.postComment);

router.put('/pageview/', PageViewCtrl.putPageView);

module.exports = router;