var fs = require('fs');
var https = require('https');
var options = {
    key: fs.readFileSync('server/certs/serverKey.key'),
    cert: fs.readFileSync('server/certs/server.crt'),
    ca: [fs.readFileSync('server/certs/CA.crt'), fs.readFileSync('server/certs/client.crt')],
    requestCert: true
};

var server = https.createServer(options, function (req, res) {
    var body = [];
    req.on('error', function(err) {
        console.error(err);
    }).on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        console.log(body + " : " + new Date());
    });
    res.end();
}).listen(8000);

