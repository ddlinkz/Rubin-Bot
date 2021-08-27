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

module.exports = {
	getComments,
	getCommentId
};