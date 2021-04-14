require('dotenv').config();

const DbUtils = require('./dbutils').DbUtils;


async function main(){
	const args = process.argv.slice(2);

	const tester = new DbUtils();
	await tester.connect();


	if(args[0] == "fillmany"){
		await tester.run_textract_many().catch(console.dir);
	} else if(args[0] == "fillone"){
		await tester.run_textract().catch(console.dir);
	} else if(args[0] == "textfields"){
		await tester.add_text_string().catch(console.dir);
	}

	await tester.close();
}

main();