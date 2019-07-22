const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('This is the response!');
});

server.listen(1337, 'localhost', () => {
  console.log('Listening for request now');
});
