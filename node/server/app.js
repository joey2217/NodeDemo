var router=require('./router');
var handler=require('./handler');
var server=require('./server'); 

var handle={};
handle["/"] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;

server.startServer(router.route, handle);