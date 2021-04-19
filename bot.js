require('dotenv').config();

const Twit = require('twit');
const assert = require('assert');
const DbUtils = require('./dbutils').DbUtils;

// Twitter API keys
const Bot = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN, 
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

async function main(){

    const resp = await Bot.get('statuses/user_timeline', { screen_name: 'RickRubin'});

    const tweet = {
        img: resp.data[0].entities.media[0].media_url,
        date: resp.data[0].created_at,
        user_count: resp.data[0].user.followers_count,
        tweet_id: resp.data[0].id
    }

    const database_util = new DbUtils();
    await database_util.connect();


    await database_util.add_tweet(tweet).catch(console.dir);

    await database_util.close();
}

main();