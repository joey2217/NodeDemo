var fs=require('fs');

fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/writeMe.txt', data, function() {
            console.log('copy successfully');
        })
    })
});

//创建目录
// fs.mkdirSync('src');
//删除目录
// fs.rmdirSync('src');

// 删除文件
// fs.unlink('writeMe.txt',function () {
//     console.log('delete writeMe file')
// })