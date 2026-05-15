'use strict';

const express = require('express');
const app = express();

app.get('/math/circle/:r', function(req, res) {
  let r = parseFloat(req.params['r']);
  let area = Math.PI * r * r;
  let circumference = Math.PI * 2 * r;
  res.json({ area: area, circumference: circumference });
});

app.get('/hello/name', function(req, res) {
  let missing = [];
  if (!req.query['first']) missing.push('first');
  if (!req.query['last']) missing.push('last');
  if (missing.length > 0) {
    res.type('text').status(400).send('Missing Required GET parameters: ' + missing.join(', '));
  } else {
    res.type('text').send('Hello ' + req.query['first'] + ' ' + req.query['last']);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
