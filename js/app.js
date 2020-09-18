const express = require('express')
const app = express()
const port = 3000

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});