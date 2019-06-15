// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var dbInfo = process.env.USERINFO;

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });

app.set('view engine', 'ejs');

client.connect(err => {
    const cursor = client.db("rubin-bot").collection("tweets").find({});
    // perform actions on the collection object
    app.listen('8080', function() {
        console.log('8080 is the magic port');
    });
});

app.get('/', function(req, res) {
    client.db("rubin-bot").collection("tweets").find({}).toArray(function(err, results){
        res.render('pages/index', {
            tweets: results
        });
    })
});

/* app.listen(8080);
console.log('8080 is the magic port'); */