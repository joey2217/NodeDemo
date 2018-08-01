var http = require('http');
var url = require('url');
var querystring = require('querystring');

var startServer = function (route, handle) {
    var server = http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request received' + pathname);
        var data = [];
        req.on('error', function (err) {
            console.log(err)
        }).on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            if (req.method === 'POST') {
                if (data.length > 1e6) {
                    req.connection.destroy();
                }
                data = Buffer.concat(data).toString;
                debugger;
                route(handle, pathname, res, querystring.parse(data));
            } else {
                var params = url.parse(req.url, true).query;
                route(handle, pathname, res, params);
            }
        });
        // var params=url.parse(req.url,true).query;
        // route(handle, pathname, res,params);
    });

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost:3000');
}
module.exports.startServer = startServer;