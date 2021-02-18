var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("Welcome to NodeJs.")
    response.end();

}).listen(1920);
console.log("Server is conncted.")