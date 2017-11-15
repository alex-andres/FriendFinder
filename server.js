const express = require('express');
const path = require('path')

// Create an instance of the express app.
const app = express();

// Specify the port.
const port = 3000;


// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/routing/apiRoutes.js"));
});


// Initiate the listener.
app.listen(port);