var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'localhost',
    port: 8000,
    key: fs.readFileSync("certs/clientKey.key"),
    cert: fs.readFileSync("certs/client.crt"),
    ca: fs.readFileSync('certs/CA.crt'),
    method: "POST"
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (req, res) {})
});
req.on('error', function(e) {
    console.log('problem with request: ' + e.stack);
});
req.end("Hello, Server");