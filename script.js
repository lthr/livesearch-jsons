$(window).load(function () {

  // select aite/site output
  var env = $('input[name="optradio"]:checked', '#form').val();
  $('#form input').on('change', function () {
    env = $('input[name="optradio"]:checked', '#form').val();
    $('#search').keyup();
  });

  $('#search').keyup(function () {
    var searchField = $('#search').val();
    var regex = new RegExp(searchField, "i");

    function highlightStr(str) {
      //var re = new RegExp(searchField, "g");
      //str = str.replace(re, '<span class="mark-string">' + searchField + '</span>');
      return str;
    }

    function indent(s, ind) {
      ind = ind || 0;
      var spacing = 20;
      while (ind--) {
        spacing += 20;
      }
      return '<div style="margin-left: ' + spacing + 'px">' + s + '</div>';
    }

    function catEnd(s, ind) {
      return indent('<span class="key">' + s + '</span>', ind);
    }

    function catBegin(cat, bracket, ind) {
      return indent('<span class="key">' + cat + ':</span><span class="key">' + bracket + '</span>', ind);
    }

    function keyOrValFoundInStr(key, val) {
      return (key.search(regex) != -1) || (val.toString().search(regex) != -1);
    }

    function keyVal(key, val, ind) {
      var k = '',
          v = '',
          output = '';
      if (typeof val == 'boolean' || typeof val == 'number') val = val.toString();
      if (typeof val == 'string') {
        if (keyOrValFoundInStr(key, val)) {
          k = (key.search(regex) != -1) ? highlightStr(key) : key;
          v = (val.search(regex) != -1) ? highlightStr(val) : val;
          output = indent('<span class="key">' + k + ':</span><span class="value">' + v + '</span>', ind);
        }
      }
      return output;
    }

    function catWithKeyVals(catKey, val, ind) {
      var s = '';
      for (var key in val) {
        s += keyVal(key, val[key], ind + 1);
      }
      return s ? catBegin(catKey, '{', ind) + s + catEnd('}', ind) : '';
    }

    var output = '';
    $.getJSON(['data.js'], function (data) {
      $.each(data, function (index, customer) {

        var accountStr = '';
        for (var i = 0; i < customer.accounts.length; i++) {

          $.each(customer.accounts[i], function (key, val) {
                accountStr += keyVal(key, val, 2);

                // accountTypeSpecifications
                if (typeof val == 'object' && key == 'accountTypeSpecifications') {
                  accountStr += catWithKeyVals(key, val, 2);
                }

                // holdings
                if (typeof val == 'object' && key == 'holdings') {
                  var holdingsStr;
                  for (var holding in val) {
                    holdingsStr = '';
                    for (var h in val[holding]) {

                      // holdings instrument
                      if (typeof val[holding][h] == 'object' && h == 'instrument') {
                        holdingsStr += catWithKeyVals(h, val[holding][h], 3);
                      }

                      // holdings position
                      if (typeof val[holding][h] == 'object' && h == 'position') {
                        holdingsStr += catWithKeyVals(h, val[holding][h], 3);
                      }
                    }
                    accountStr += holdingsStr ? catBegin(key, '[', 2) + holdingsStr + catEnd(']', 2) : '';
                  }
                }
              }
          );
        }
        accountStr = accountStr ? catEnd('{', 1) + accountStr + catEnd('}', 1) : '';
        if (accountStr && (env == customer._details.ENV || env == '')) {
          accountStr = catBegin('accounts', '[', 0) + accountStr + catEnd(']', 0);
          var fpoUrl = 'https://intservices-'
              + customer._details.ENV.toLowerCase()
              + '.sed1.root4.net/fpo/#/'
              + customer._details.COUNTRY
              + '/' + customer._details.CUSTOMER;
          output += '<div class="panel panel-info">';
          output += '<div class="panel-heading">' + customer._details.COUNTRY.toUpperCase() + ' ' + customer._details.CUSTOMER + ' <span style="float: right"><a href="' + fpoUrl + '" target="_blank">FPO ' + customer._details.ENV + '</a></span> </div>';
          output += '<div class="panel-body">' + accountStr + '</div>';
          output += '</div>';
        }
      });
      //if (!searchField) output = '';
      $('#output').html(output);
    });
  });
});
