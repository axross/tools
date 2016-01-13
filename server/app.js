const createServer = require('./Server');

const server = createServer({});

server.listen(process.env.PORT || 3000);
