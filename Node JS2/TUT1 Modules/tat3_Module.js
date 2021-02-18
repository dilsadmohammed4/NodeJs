var http = require('http');
var evaluate = require('./Modules/evaluate');
var custom = require('./Modules/custom');
var module3 = require('./Modules/mudule3');

function onrequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    //Evaluate Module Export:
    response.write("Welcome to NodeJs.")
    response.write("\n" + evaluate.sum(23, 45));
    response.write("\n" + evaluate.str);

    //Custome Module Export:
    response.write("\n" + custom.DT());
    response.write("\n" + custom.str2);
    response.write("\n" + custom.Str3);
    response.write("\n" + custom.Mul(4, 8));

    //Module 3 Exports:
    response.write("\n" + module3.myFunc());



    response.end();
}


http.createServer(onrequest).listen(1920);
console.log("Server is conncted.")