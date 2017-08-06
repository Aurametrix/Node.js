onst req = client.request({ ':path': '/some/path' });
req.on('data', (chunk) => { /* do something with the data */ });
req.on('end', () => {
  client.destroy();
});

// Plain text (non-TLS server)
const server = http2.createServer();
server.on('stream', (stream, requestHeaders) => {
  stream.respond({ ':status': 200 });
  stream.write('hello ');
  stream.end('world');
});
server.listen(80);
const http2 = require('http2');
const client = http2.connect('http://localhost');
