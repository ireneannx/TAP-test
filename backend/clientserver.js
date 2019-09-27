const express = require('express');
const path = require('path');
const app = express();
var compression = require('compression');
app.use(compression());
const root = require('path').join(__dirname, 'views/build')
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
})
app.listen(8000);