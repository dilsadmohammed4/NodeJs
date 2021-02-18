var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {

    fs.readFile('./index.html', function (err, data) {
        if (err) {
            response.writeHead(400);
            response.write('Page not found!');
        } else {

            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(data);
            response.end();
        }
    })

}).listen(1920);
console.log('Server started...');