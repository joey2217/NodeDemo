var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage });

var app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json())

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// app.get('/', function(req, res) {
//     console.dir(req.query);
//     res.send("home page: " + req.query.find);
// });
app.get('/', function (req, res) {
    // fs.readFile('./views/form.html', { encoding: 'utf-8' }, function (err, data) {
    //     if (err) {
    //         console.dir(err);
    //     }
    //     res.send(data);
    // });
    res.sendfile(__dirname+'/views/form.html')
});

app.post('/upload', upload.single('logo'), function (req, res, next) {
    res.send({ "success": true });
})

app.post('/', urlencodedParser, function (req, res) {
    console.dir(req.body);
    res.send(req.body.name);
})
app.post('/json', jsonParser, function (req, res) {
    console.dir(req.body);
    res.send(req.body.name);
})

app.get('/profile/:id/user/:name', function (req, res) {
    console.dir(req.params);
    res.send("You requested to see a profile with the name of " + req.params.name);
});

app.get('/ab?cd', function (req, res) {
    res.send('/ab?cd');
})

app.listen(3000);
console.log('Server started on localhost:3000');
