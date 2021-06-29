var path = require('path');
var express = require('express');

var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'webapp')));
// app.use(express.static(__dirname + '/webapp'));

// routes
app.get('/', function(req, res){
	console.log("method in get/: " + req.method);
   // res.send("Hello World!");
   res.render("index");
});

app.listen(port, function() {
	console.log("app running");
})
