var http = require('http');

http.createServer(function (req, res) {
    console.log('new request received %j', req.headers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(process.env));
}).listen(process.env.PORT0); // dynamic binding

console.log('flock-demo at http://0.0.0.0:%d/', process.env.PORT0);
