const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Use async/await for cleaner error handling
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Simulated error'));
        }
      }, 1000);
    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});