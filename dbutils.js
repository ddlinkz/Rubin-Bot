require('dotenv').config();

const textract = require('textract');
const { createWorker } = require('tesseract.js');

const options = { keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }
const MongoClient = require('mongodb').MongoClient;

const cloudinary = require('cloudinary').v2;

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.BOT_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.BOT_CLOUDINARY_API_KEY,
    api_secret: process.env.BOT_CLOUDINARY_API_SECRET
});

// const worker = createWorker({
// 	logger: m => console.log(m)
// });

class DbUtils {
	constructor () {
		this.client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }, options);
		this.worker = createWorker({ logger: m => console.log(m) });
	}

	async connect() {
		await this.client.connect();
	}

	async close() {
		await this.client.close();
		await this.worker.terminate();
	}

	async run_textract() {
		console.log("Connected successfully to server");

		const database = this.client.db('rubin-bot');
		const tweets = database.collection('tweets');

		const doc = await tweets.findOne({ text_string: ""});
		if(doc == null){
			console.log('No documents to modify.');
			return;
		}


		const { data: { text } } = await this.worker.recognize(doc.img);

		const regex = /\r?\n|\r/g;
		const modified_text = text.replace(regex, ' ');
		console.log(modified_text);

	  	await tweets.findOneAndUpdate({"img": doc.img}, { $set: {text_string: modified_text}});
	}

	async run_textract_many() {
		console.log("Connected successfully to server");

		const database = this.client.db('rubin-bot');
		const tweets = database.collection('tweets');

		const query = { text_string: ""};

		const cursor = tweets.find(query);
		const count = await tweets.countDocuments(query);
		if (count == 0) {
			console.log('No documents to modify.');
			return;
		}

		await this.worker.load();
		await this.worker.loadLanguage('eng');
		await this.worker.initialize('eng');

		while(await cursor.hasNext()) {
			const doc = await cursor.next();
			const { data: { text } } = await this.worker.recognize(doc.img);

			const regex = /\r?\n|\r/g;
			const modified_text = text.replace(regex, ' ');
			console.log(modified_text);

		  	await tweets.findOneAndUpdate({"img": doc.img}, { $set: {text_string: modified_text}});
		}

		console.log(count + ' documents modified');
	}

	async add_text_string() {
		console.log("Connected successfully to server");

		const database = this.client.db('rubin-bot');
		const tweets = database.collection('tweets');

		const filter = { text_string: {$exists: false}};
		const update = { $set: {text_string: ""}}

		const count = await tweets.countDocuments(filter);

		if (count == 0) {
			console.log('No documents to modify.');
			return;
		}

		const result = await tweets.updateMany(filter, update);

		console.log(count + ' documents modified');
	}

	async add_tweet(tweet) {
		console.log("Connected successfully to server");

		const database = this.client.db('rubin-bot');
		const tweets = database.collection('tweets');

		const filter = { tweet_id: tweet.tweet_id};
		const count = await tweets.countDocuments(filter);
		console.log(tweet);

		if (count == 1) {
			console.log('Tweet exists already!');
			return;
		}

		await this.worker.load();
		await this.worker.loadLanguage('eng');
		await this.worker.initialize('eng');

		// Extract text
		const { data: { text } } = await this.worker.recognize(tweet.img);

		const regex = /\r?\n|\r/g;
		const modified_text = text.replace(regex, ' ');
		console.log(modified_text);

		// Upload to Cloudinary
        const result = await cloudinary.uploader.upload(tweet.img, { folder: "images/" });
    	const cloud_url = result.url;
        const cloud_secure_url = result.secure_url;

        const insert_tweet = {
            tweet_id: tweet.tweet_id,
            img: cloud_url,
            secure_img: cloud_secure_url,
            date: tweet.date,
            user_count: tweet.user_count,
            text_string: modified_text
        }

        console.log(insert_tweet);

        await tweets.insertOne(insert_tweet, function(err, res) {
            if(err) throw err;
            console.log("1 document inserted");
        })
	}
}

module.exports.DbUtils =  DbUtils;
