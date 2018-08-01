var http=require('http');
var fs=require('fs');
var sever=http.createServer(function (req,res) {
    console.log('Request received');
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
    myReadStream.pipe(res);
});

sever.listen(3000,'127.0.0.1');
console.log('Server started on localhost:3000');