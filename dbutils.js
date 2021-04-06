require('dotenv').config();

const textract = require('textract');
const { createWorker } = require('tesseract.js');

const options = { keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }, options);

var i = 0;

const worker = createWorker({
	logger: m => console.log(m)
});

async function run() {
	try {
		await client.connect();

		await worker.load();
		await worker.loadLanguage('eng');
  		await worker.initialize('eng');

		console.log("Connected successfully to server");

		const database = client.db('rubin-bot');
		const tweets = database.collection('tweets');

		const result = await tweets.findOne({ text_string: ""});
		const { data: { text } } = await worker.recognize(result.img);

		const regex = /\r?\n|\r/g;
		const modified_text = text.replace(regex, ' ');
		console.log(modified_text);

      	await tweets.findOneAndUpdate({"img": result.img}, { $set: {text_string: modified_text}});

      	await worker.terminate();

	} finally {
		await client.close();
	} 
}

run().catch(console.dir);
