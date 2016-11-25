var fs = require('fs');
var https = require('https');
var options = {
    key: fs.readFileSync('certs/serverKey.key'),
    cert: fs.readFileSync('certs/server.crt'),
    ca: [fs.readFileSync('certs/CA.crt'), fs.readFileSync('certs/client.crt')],
    requestCert: true
};

var server = https.createServer(options, function (req, res) {
    var body = [];
    req.on('error', function(err) {
        console.error(err);
    }).on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        console.log(body + new Date());
    });
}).listen(8000);