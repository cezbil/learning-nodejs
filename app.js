const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World!</title></head>');
    res.write('<body><h1>Hello World! heading</h1></body>');
    res.write('</html>');
});

server.listen(3000);
