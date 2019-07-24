/*
 * @file: server.js
 * @description: It Contain server setup.
 * @author: Jasdeep Singh
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Run react build setup
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Server starting point
app.listen(3002, () => {
  console.log('server is running on port 3002');
});
