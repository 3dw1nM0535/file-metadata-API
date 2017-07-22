var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

//Static files Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.listen(port, '127.0.0.1', () => {
    console.log("Server listening for connecions");
});