const express = require("express");
const homeRoute = require("./routes/home");

const app = express();

app.use("/", homeRoute);

module.exports = app;
