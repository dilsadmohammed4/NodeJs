var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var content = '';
    var reader = fs.createReadStream('note.txt');
    reader.setEncoding('UTF-8');
    reader.on('error', function (err) {
        console.log(err);
    }).on('data', function (chunk) {
        content += chunk;
    }).on('end', function () {
        res.on('error', function (err) {
            console.log(err);
        });
        res.setHeader('200', {
            'Content-Type': 'plain/text'
        });
        res.write(content);
        res.end();
    })

}).listen(1920);
console.log("Server is connected....")