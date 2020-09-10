const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);


const server = app.listen(5000, function () {
    console.log("Express server listening on port " + server.address()["port"]);
});