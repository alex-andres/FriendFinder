const path = require('path');
const express = require("express");

const app = express();

module.exports = function(app) {

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/surveys", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};


