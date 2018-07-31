var fs=require('fs');

var file=fs.readFile('events.js','utf-8',function(err,data){
    fs.writeFile('writeMe.txt','utf-8',function () {
        console.log('write has finished')
    })
});
console.log('finished');

// 同步读写文件
// var file=fs.readFileSync('events.js','utf-8');
// fs.writeFileSync('events.js',"Hello wrold");
// console.log(file);


// var readMeOne = fs.readFile("readMe.txt", "utf8", function(err, data) {
//     var waitTill = new Date(new Date().getTime() + 2 * 1000);
//     while (waitTill > new Date()) {}
//     console.log("first async");
// });

// var readMeTwo = fs.readFile("readMe.txt", "utf8", function(err, data) {
//     var waitTill = new Date(new Date().getTime() + 2 * 1000);
//     while (waitTill > new Date()) {}
//     console.log("second async");
// });

// console.log("finished");