var request = require("request"),
    fs = require('fs');

var urls = [
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/gh-pages/mock/mock1.json",
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/gh-pages/mock/mock2.json",
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/gh-pages/mock/mock3.json"
];

var output = [],
    count = 0;

for (var url in urls) {
  (function (url) {
    request({
      url: urls[url],
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        body._details = {
          'ENV': urls[url].indexOf('mock2') > -1 ? 'AITE' : 'SITE',
          'COUNTRY': 'XX'
        };
        output.push(body);
      }
      count++;
      if (count == urls.length) {
        fs.writeFile('./data.js', JSON.stringify(output), console.log('--- Saved!'));
      }
    });
  })(url);
}
