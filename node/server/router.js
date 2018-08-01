var fs=require('fs');

function route(handle,pathname,response,params){
    console.log('Route a request for '+pathname);
    if (typeof handle[pathname]==='function') {
        handle[pathname](response,params);
    }else{
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html','utf-8');
    }
}

module.exports.route=route;