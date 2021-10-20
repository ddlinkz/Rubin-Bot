const PageView = require('../models/pageview-model');

// GET Requests
const getPageView = async (req, res) => {
    await PageView.findOne({route: "/tweets/" + req.params.route}, (err, pageview) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: pageview })
    }).catch(err => console.log(err))
};

// PUT Requests
const putPageView = async (req, res) => {
	const query = { route: req.body.route };
	const updateval = { $inc: {view_count: 1 } };

    await PageView.updateOne(query, updateval, { upsert: true });
    return res.status(200).json({ success: true });
};

module.exports = {
	getPageView,
    putPageView
};