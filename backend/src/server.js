const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("./database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = app.listen(5000, function () {
  console.log("Express server listening on port " + server.address()["port"]);
});
