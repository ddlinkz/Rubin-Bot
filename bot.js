var Twit = require('twit');

var Bot = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN, 
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

Bot.get('statuses/user_timeline', { screen_name: 'RickRubin'}, function(err, data, response) {
    console.log(data);
})