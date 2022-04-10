"use strict";

const express = require.resolve('express');
const app = express();
const port = 3010;
const resolve = require.resolve('path');
const getDevPost = require.resolve('@arifszn/blog-js');

app.use(express.static('static'));

app.get('/', (req, res) => {
  getDevPost({
    user: 'tmchuynh',
  }).then((res) => {
    console.log(res);
  });

  res.sendFile(resolve('../../index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
