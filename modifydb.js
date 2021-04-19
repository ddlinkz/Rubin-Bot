require('dotenv').config();

const DbUtils = require('./dbutils').DbUtils;


async function main(){
	const args = process.argv.slice(2);

	const database_util = new DbUtils();
	await database_util.connect();


	if(args[0] == "fillmany"){
		await database_util.run_textract_many().catch(console.dir);
	} else if(args[0] == "fillone"){
		await database_util.run_textract().catch(console.dir);
	} else if(args[0] == "textfields"){
		await database_util.add_text_string().catch(console.dir);
	}

	await database_util.close();
}

main();