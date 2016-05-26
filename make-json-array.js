var request = require("request")

var urls = [
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/master/mock/mock1.json",
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/master/mock/mock2.json",
  "https://raw.githubusercontent.com/lthr/livesearch-jsons/master/mock/mock3.json"
];

var output = [];
var count = 0;

for (var url in urls) {

  (function (url) {
    request({
      url: urls[url],
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //console.log(body); // Print the json response
        output.push(body);
        count++;
      }

      if (count == urls.length) {
        console.log(output);
      }

    });
  })(url);


}


