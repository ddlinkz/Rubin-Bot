const PageView = require('../models/pageview-model');

// GET Requests
const getPageView = async (req, res) => {
    await PageView.findOne({tweet_id: req.params.route}, (err, pageview) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (tweets.length === 0) {
            return res
                .status(404)
                .json({ success: false, error: `PageView not found` })
        }
        return res.status(200).json({ success: true, data: paveview })
    }).catch(err => console.log(err))
};

// PUT Requests
const putPageView = async (req, res) => {
	const query = { route: req.body.route };
	const updateval = { $inc: {view_count: 1 } };

    await PageView.updateOne(query, updateval, { upsert: true }).exec();
};

module.exports = {
	getPageView,
    putPageView
};