var express = require("express");


var app = express();

//contador de conexiones
var conexiones = 0;

function showTweet(tweet){
	//Deberia retornar el elemento a agregar al html
	return "<img src='"+tweet.text + "'></img>"			//imagen esta "text" en DB
	+"<h1>" + tweet.screen_name +"</h1>"				//screen name es el heading
	+"<p> Contenido: "+tweet.profile_image_url + "</p>";//asi se llama el texto
}

function getTweetsFromDB(_res){
	
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('tweets.sqlite3');



	db.all("SELECT * from tweets", (err, tweets) => {
		if (err) throw err;
		let lineasTweet = "";
		// console.log(tweets);
		tweets.forEach((tweet) => {
			let lineaTweet = showTweet(tweet);
			lineasTweet+= lineaTweet;
		});
		_res.send(lineasTweet);

		db.close();
	});

}


app.get("/", (req, res) => {
	console.log("Get /" + ++conexiones);
	//send solo se puede usar una vez por peticion. Se pasa res para responder.
	getTweetsFromDB(res);
	//res.send(tweets);
});



app.get("/about", (req, res) => {
	console.log("Get /");
	res.send("By John");
});


app.listen(8080, () => {
	console.log("Listening on :8080")
});