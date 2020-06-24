const express = require('express');

const server = express();

const host = 'localhost';
const port = process.env.PORT || '5000';

server.use(express.urlencoded());
server.use(express.json());

server.listen(port, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});

server.use(express.static('./public'));
