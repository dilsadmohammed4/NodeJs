var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    var myObj = {
        id: 2,
        name: "Dilsad Mohammed",
        age: 21
    };
    res.end(JSON.stringify(myObj));
}).listen(1920);
console.log("Server is started....");