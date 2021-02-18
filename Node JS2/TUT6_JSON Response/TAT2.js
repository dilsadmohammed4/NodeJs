var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile("./user.json", "UTF-8", function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        data=JSON.parse(data);
        res.end(JSON.stringify(data));
    });
}).listen(1920);
console.log("Server is started....");