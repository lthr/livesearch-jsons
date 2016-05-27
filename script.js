$(window).load(function () {

  var accountTypeSpecificationsCounter,
      holdingsCounter,
      holdingsInstrumentCounter;

  var env = $('input[name="myRadio"]:checked', '#form').val();
  $('#form input').on('change', function () {
    env = $('input[name="myRadio"]:checked', '#form').val();
    $('#search').keyup();
  });

  $('#search').keyup(function () {
    var searchField = $('#search').val();
    var regex = new RegExp(searchField, "i");

    function markString(str) {
      var re = new RegExp(searchField, "g");
      str = str.replace(re, '<span class="mark-string">' + searchField + '</span>');
      return str;
    }

    function indentation(s, ind) {
      ind = ind || 0;
      var spacing = 20;
      while (ind--) {
        spacing += 20;
      }
      return '<div style="margin-left: ' + spacing + 'px">' + s + '</div>';
    }

    function keyClass(s) {
      return '<span class="key">' + s + ':</span>';
    }

    function groupClass(s, ind) {
      return indentation('<span class="key">' + s + '</span>', ind);
    }

    function valueClass(s) {
      return '<span class="value">' + s + '</span>';
    }

    function foundKeyOrVal(key, val) {
      return (key.search(regex) != -1) || (val.toString().search(regex) != -1);
    }

    function formatOutput(key, val, indent, alwaysShow) {
      var foundKey = '',
          foundValue = '',
          output = '';
      if (typeof val == 'boolean' || typeof val == 'number') val = val.toString();
      if (typeof val == 'string') {
        if (foundKeyOrVal(key, val)) {
          key.search(regex) != -1 ? foundKey = markString(key) : foundKey = key;
          val.search(regex) != -1 ? foundValue = markString(val) : foundValue = val;
          output = indentation(keyClass(key) + valueClass(val), indent);
        }
      }
      if (!output && alwaysShow) output = indentation(keyClass(key) + valueClass(val), indent);
      return output;
    }

    var output = '';
    $.getJSON(['data.js'], function (data) {
      $.each(data, function (index, customer) {
        var foundKey = '',
            foundValue = '',
            foundOutput = '',
            fpoUrl = 'https://intservices-' + customer._details.ENV.toLowerCase() + '.sed1.root4.net/fpo/#/' + customer._details.COUNTRY + '/' + customer._details.CUSTOMER;

        var accountTypeSpecificationsCounter = 0,
            holdingsCounter = 0,
            holdingsInstrumentCounter = 0,
            holdingsPositionCounter = 0,
            holdingsInstrumentOutput = '';


        foundOutput += formatOutput('accounts', '[', 0, true);
        for (var i = 0; i < customer.accounts.length; i++) {
          foundOutput += groupClass('{', 1);
          $.each(customer.accounts[i], function (key, val) {
                foundOutput += formatOutput(key, val, 2);

                var tempOutput = '';
                if (typeof val == 'object' && key == 'accountTypeSpecifications') {
                  tempOutput += formatOutput(key, '{', 2, true);
                  for (var v in val) {
                    if (foundKeyOrVal(v, val[v])) accountTypeSpecificationsCounter++;
                    tempOutput += formatOutput(v, val[v], 3);
                  }
                  tempOutput += groupClass('}', 2);
                }
                if (accountTypeSpecificationsCounter) foundOutput += tempOutput;

                // holdings
                var holdingsOutput = '';
                if (typeof val == 'object' && key == 'holdings') {
                  holdingsCounter = 0;
                  holdingsInstrumentCounter = 0;
                  holdingsPositionCounter = 0;
                  holdingsOutput += formatOutput(key, '[', 2, true);
                  for (holding in val) {
                    for (var h in val[holding]) {
                      if (foundKeyOrVal(h, val[holding][h])) holdingsCounter++;
                      if (typeof val[holding][h] == 'object' && h == 'instrument') {
                        holdingsInstrumentOutput = '';
                        holdingsInstrumentOutput += formatOutput(h, '{', 4, true);
                        for (var h2 in val[holding][h]) {
                          if (foundKeyOrVal(h2, val[holding][h][h2])) holdingsInstrumentCounter++;
                          holdingsInstrumentOutput += formatOutput(h2, val[holding][h][h2], 5);
                        }
                        holdingsInstrumentOutput += groupClass('}', 4);
                      }
                      if (typeof val[holding][h] == 'object' && h == 'position') {
                        holdingsPositionOutput = '';
                        holdingsPositionOutput += formatOutput(h, '{', 4, true);
                        for (var h2 in val[holding][h]) {
                          if (foundKeyOrVal(h2, val[holding][h][h2])) holdingsPositionCounter++;
                          holdingsPositionOutput += formatOutput(h2, val[holding][h][h2], 5);
                        }
                        holdingsPositionOutput += groupClass('}', 4);
                      }
                    }
                    if (holdingsInstrumentCounter + holdingsPositionCounter) holdingsOutput += groupClass('{X', 3);
                    if (holdingsInstrumentCounter) holdingsOutput += holdingsInstrumentOutput;
                    if (holdingsPositionCounter) holdingsOutput += holdingsPositionOutput;
                    if (holdingsInstrumentCounter + holdingsPositionCounter) holdingsOutput += groupClass('}X', 3);
                  }
                  holdingsOutput += groupClass(']', 2);
                }
                if (holdingsCounter + holdingsInstrumentCounter + holdingsPositionCounter) foundOutput += holdingsOutput;
              }
          );
          foundOutput += groupClass('}', 1);
        }
        if (foundOutput && (env == customer._details.ENV || env == '')) {
          output += '<div class="result">';
          output += '<div class="link">' + customer._details.COUNTRY.toUpperCase() + ' ' + customer._details.CUSTOMER + ' &nbsp; <a href="' + fpoUrl + '" target="_blank">FPO</a></div>';
          output += foundOutput;
          output += '</div>';
        }
      });
      if (!searchField) output = '';
      $('#output').html(output);
    });
  });
});
