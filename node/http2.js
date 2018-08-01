var http=require('http');

var sever=http.createServer(function (req,res) {
    console.log('Request received');
    res.writeHead(200,{'Content-type':'application/json'});
    var obj={
        name:'qqq',
        age:22
    }
    res.end(JSON.stringify(obj));
});

sever.listen(3000,'127.0.0.1');
console.log('Server started on localhost:3000');