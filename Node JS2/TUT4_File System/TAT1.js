var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    var content = "<h1>Welcome</h1><p>This is a content</p>";
    fs.writeFile('abc.html', content, function (err) {
        if (err) throw err;
        console.log("Data Saved");
    });


    fs.open('abc.html', "a", function (err, fd) {
        fs.appendFile(fd, '<p>Hello</p>', function (err) {
            if (err) throw err;
        });
    })

    fs.readFile('abc.html', function (err, data) {
        if (err) throw err;
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(data);
        response.end();
    })
}).listen(1920);
console.log("Server is Started....");