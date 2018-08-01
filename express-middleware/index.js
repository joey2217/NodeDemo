var express = require('express');
var app=express();
app.use(express.static('public'));

app.use(function (req,res,next) {
    console.log("First middleware");
    next();
    console.log("First middleware after");
});

app.use(function (req,res,next) {
    console.log("Second  middleware");
    next();
});

app.use(function (req,res,next) {
    res.send('OK');
});

app.listen(3000);
console.log('Server started on localhost:3000');
