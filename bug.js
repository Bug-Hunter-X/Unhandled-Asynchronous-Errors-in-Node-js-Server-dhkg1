const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const doSomethingAsync = () => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        // Simulate a successful operation
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Simulate an error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error!');
      }
    }, 1000);
  };

  doSomethingAsync();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});