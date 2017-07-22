var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var fs = require('fs');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

//Static files Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/uploads', upload.single('uploadFile'), (req, res) => {
    fs.unlink(req.file.path, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(req.file.filename + "is deleted!");
        }
        res.json({fileSize: req.file.size});
    });
});


app.listen(port, '127.0.0.1', () => {
    console.log("Server listening for connecions");
});