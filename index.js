const express = require("express");
const PORT = process.env.PORT || 2000;
const server = express();
const db = require("./models");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

require("dotenv").config();

server.use(express.json());
server.use(cors());
server.use(express.static("./Public"));
server.use(bearerToken());

server.get('/api', (req, res) => {
  res.send(`Hello, this is my API`);
});

server.get('/api/greetings', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, Student !',
  });
});

const { roleRouters, userRouters, studentRouters, absenRouters } = require("./routers");
server.use(roleRouters);
server.use(userRouters);
server.use(studentRouters);
server.use(absenRouters);

server.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log("Success Running at PORT: " + PORT);
});
