const Comment = require('../models/comment-model');

const getComments = async (req, res) => {
    await Comment.find({}, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => console.log(err))
};

const getCommentId = async (req, res) => {
    await Comment.find(req.params, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => console.log(err))
};

const postComment = async (req, res) => {
	const comment = new Comment({
		content: req.body.content,
		author: req.body.author,
		tweet_id: req.body.tweet_id
	})
	console.log(comment);
	comment.save(function (err, comment) {
		if (err) {
			return res.status(400).json({ success: false, error: err})
		}
		res.status(200).json(comment)
	})
};

module.exports = {
	getComments,
	getCommentId,
	postComment
};