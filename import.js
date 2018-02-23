const fs = require("fs");
const sqlite3 = require('sqlite3')

//sync es prohibido
//fs.readFileSync("WebDevUniandes2018_w2.json","utf8");

fs.readFile("WebDevUniandes2018_w2.json","utf8", (err, data)=> {} /*arrow function. pide dos params y retorna*/
	if (err) throw err;

	console.log("Data read!");
	let tweets;
	try {
		tweets  = JSON.parse(data);
	} catch(e){
		throw e;
	}

	console.log(tweets);
});
console.log("Done!");