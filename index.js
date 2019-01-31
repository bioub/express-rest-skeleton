const http = require('http');

const config = require('./config');
const app  = require('./app');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
