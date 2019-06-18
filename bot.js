var Twit = require('twit');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cloudinary = require('cloudinary').v2;

// Twitter API keys
var Bot = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN, 
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.BOT_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.BOT_CLOUDINARY_API_KEY,
    api_secret: process.env.BOT_CLOUDINARY_API_SECRET
});

// Assign Client variable
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });

Bot.get('statuses/user_timeline', { screen_name: 'RickRubin'}, function(err, data, response) {
    var img_url = data[0].entities.media[0].media_url;
    var cloud_url;
    var cloud_secure_url;
    var created_at = data[0].created_at;
    var user_count = data[0].user.followers_count;
    var tweet_id = data[0].id;
    client.connect(err => {
        var Tweets = client.db("rubin-bot").collection("tweets").find({tweet_id: tweet_id}).toArray();
        if(Tweets > 0){
            cloudinary.uploader.upload(img_url,
                { folder: "images/" },
                function(error, result){
                    console.log(result, error);
                    cloud_url = result.url;
                    cloud_secure_url = result.secure_url;
                    var tweet = {
                        tweet_id: tweet_id,
                        img: cloud_url,
                        secure_img: cloud_secure_url,
                        date: created_at,
                        user_count: user_count
                    }
                    Tweets.insertOne(tweet, function(err, res) {
                        if(err) throw err;
                        console.log("1 document inserted");
                    })
                }
            )
        } else {
            console.log("Tweet exists already!");
        }
        client.close();
    });
});

// TODO:
// add only if the tweet doesn't already exist
// add tweet in general
// use cloudinary to store images, then use that link to store in mongodb

// ask for tweet
// upload image first/
// with response, connect to mongodb
// insert data with photos replaced with cloudinary urls

/*client.connect(err => {
    const collection = client.db("rubin-bot").collection("tweets");
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
      ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
      });
    // perform actions on the collection object
    client.close();
}); */

// TODO:

// Local testing - heroku local worker (done)
// - also added .env and .gitignore files for local testing
// Access media (find out which files to keep)
// - created_at
// - id:
// - entities:
// - extended_entities
// - user - followers_count
// Set up DB to download to
// set up front end to previous tweets
