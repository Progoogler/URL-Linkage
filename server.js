// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("*", function(req, res) { console.log(urls)
  var route = req.originalUrl.slice(1);
    for (let i = 0; i < urls.length; i++) {
      if (urls[i].locator === route) {
        console.log(urls[i].locator, urls[i].url)
        res.writeHead(301,
          {Location: urls[i].url}
        );
        res.end();
      }
    }
  res.send('Url not found.');
});

app.post('/new', function(req, res) {
  var url = req.query.url;
  var locator = '';
  for (let i = 0; i < 9; i++) {
    locator += Math.ceil(Math.random() * 9);
  }
  var obj = {url, locator};
  urls.push(obj);
  var response = {'originalUrl': url, 'linkedUrl': 'https://abiding-morning.glitch.me/' + locator};
  res.send(JSON.stringify(response));
});

// Simple in-memory store
var urls = [];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
