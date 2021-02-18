var http = require('http');

function onrequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("Welcome to NodeJs.")
    response.end();
}


http.createServer(onrequest).listen(1920);
console.log("Server is conncted.")