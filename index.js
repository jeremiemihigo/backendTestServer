"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.status(200).json("je suis un message de monsieur");
});
// const portIO = process.env.PORT || 800;
// io.listen(portIO);
//Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// // Socket.IO
