var express=require('express');

var app=express();

var indexRouter=require('./routes/index');
var usersRouter=require('./routes/users');

app.use('/',indexRouter);
app.use('/users',usersRouter);

app.listen(3000);
console.log('localhost:3000');
