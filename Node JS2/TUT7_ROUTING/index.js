var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    // var path = url.parse(request.url).pathname;
    var path = url.parse(request.url).pathname;
    console.log(path);
    switch (path) {
        case '/':
            renderHTML('./home.html', response);
            break;
        case '/about':
            renderHTML('./about.html', response);
            break;
        case '/service':
            renderHTML('./service.html', response);
            break;
        default:
            response.writeHead(404);
            response.write('Page Not Found');
            response.end()
            break;
    }
}).listen(1920);

console.log("Server Started...");

function renderHTML(path, response) {
    fs.readFile(path, "UTF-8", function (err, data) {
        if (err) {

            response.writeHead(404);
            response.write('Page Not Found');
        } else {

            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(data);
        }
        response.end();
    });
}