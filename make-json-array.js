var request = require("request"),
    fs = require('fs');

var urls = [
  "http://vda1cs0551.qaoneadr.local:8110/savings/holdings/se/196804241419",
  "http://vda1cs0551.qaoneadr.local:8110/savings/holdings/dk/4620476922",
  "http://vda1cs0551.qaoneadr.local:8110/savings/holdings/se/197010230121"

];

var output = [],
    count = 0;

for (var url in urls) {

  var options = {
    url: urls[url],
    headers: {
      'iv-user': 'g47288'
    },
    json: true
  };

  (function (options) {
    request(options, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        var url = options.url;
        body._details = {
          'ENV': url.indexOf('vda1cs0551') > -1 ? 'AITE' : 'SITE',
          'COUNTRY': url.substr(55, 2),
          'CUSTOMER': url.substr(58),
        };
        output.push(body);
      }
      if (error || response.statusCode != 200) {
        console.log('------ Failed retrieving ' + options.url);
      }
      count++;
      console.log('--- Retrieving data (' + count + '/' + urls.length + ')');
      if (count == urls.length) {
        fs.writeFile('./data.js', JSON.stringify(output), console.log('--- Finished!'));
      }
    });
  })(options);
}
