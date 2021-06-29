require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const tweetRouter = require('./routes/tweet-router');

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//app.use(express.static("public"));

//app.set('view engine', 'ejs');

app.use('/api', tweetRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
