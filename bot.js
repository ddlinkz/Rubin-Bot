var Twit = require('twit');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var Bot = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN, 
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var dbInfo = process.env.USERINFO;

const uri = "mongodb+srv://"+dbInfo+"@cluster0-zd3dc.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

Bot.get('statuses/user_timeline', { screen_name: 'RickRubin'}, function(err, data, response) {
    console.log(data[0]);
})

client.connect(err => {
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
});

// TODO:

// Local testing - heroku local worker (done)
// - also added .env and .gitignore files for local testing
// Access media (find out which files to keep)
// - created_at
// - id:
// - entities:
// - extended_entities
// Set up DB to download to
// set up front end to previous tweets
