var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world, I am on docker!\n And I am build with Jenkins!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
