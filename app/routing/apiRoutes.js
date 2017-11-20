const path = require('path');
const express = require('express');
const friendData = require('../data/friends');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res) {
      console.log(req.body);
      friendData.push(req.body);
      res.json(true);
  });


};