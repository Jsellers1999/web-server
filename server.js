var express = require("express");
var app = express();

var middleware = require('./middleware.js');



// app.get("/",function (req,res){
// 	res.send("Hello Express");

// });

// /about
//About Use

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.get("/About",middleware.requireAuthentication,function (req,res){
	res.send("About Us!");

});

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 3000;
app.listen(port, function (){
	console.log("Express server started on " + port);
});

