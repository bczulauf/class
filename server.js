var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

// Listens for messages on the given port.
app.listen(port, function() {
    console.log("app listening on port: " + port)
});

app.get("latestPost", function(req, res) {
	console.log("going to get the latest post");
});

// To start a process that listens for http messages run node server.js