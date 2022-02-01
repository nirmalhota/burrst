const express = require('express');
const server = express();
const PORT = 6556;

server.use(express.static('./bradyn-swinson'));

server.listen(PORT,() => {
    console.log(`server is listening at PORT ${PORT}`);
});