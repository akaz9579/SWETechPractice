const express = require('express');
const {pen} = require('./tasks.js');

const sever = express();

sever.get('/tasks', (req, res) => {
  res.json(pen);
});

sever.listen(3000);