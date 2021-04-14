require('dotenv').config();

const textract = require('textract');
const { createWorker } = require('tesseract.js');

const options = { keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }
const MongoClient = require('mongodb').MongoClient;

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

		await this.worker.load();
		await this.worker.loadLanguage('eng');
		await this.worker.initialize('eng');

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

		const cursor = tweets.find(filter);
		const count = await tweets.countDocuments(filter);

		if (count == 0) {
			console.log('No documents to modify.');
			return;
		}

		const result = await tweets.updateMany(filter, update);

		console.log(count + ' documents modified');
	}
}

module.exports.DbUtils =  DbUtils;
