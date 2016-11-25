var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'localhost',
    port: 8000,
    key: fs.readFileSync("certs/clientKey.key"),
    cert: fs.readFileSync("certs/client.crt"),
    ca: fs.readFileSync('certs/CA.crt')
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
});
req.on('error', function(e) {
    console.log('problem with request: ' + e.stack);
});
req.end("Hello");