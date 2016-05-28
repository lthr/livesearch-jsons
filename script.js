$(window).load(function () {
  var searchField,
      regex;

  // select aite/site output
  var env = $('input[name="optradio"]:checked', '#form').val();
  $('#form input').on('change', function () {
    env = $('input[name="optradio"]:checked', '#form').val();
    $('#search').keyup();
  });

  function highlightStr(str) {
    //var re = new RegExp(searchField, "g");
    //str = str.replace(re, '<span class="mark-string">' + searchField + '</span>');
    return str;
  }

  function indent(s, ind) {
    ind = ind || 0;
    var spacing = 20;
    while (ind--) spacing += 20;
    return '<div style="margin-left: ' + spacing + 'px">' + s + '</div>';
  }

  function catBracket(s, ind) {
    return indent('<span class="key">' + s + '</span>', ind);
  }

  function catBegin(cat, bracket, ind) {
    var braces = cat ? ':' : '';
    return indent('<span class="key">' + cat + braces + '</span><span class="key">' + bracket + '</span>', ind);
  }

  function keyOrValFoundInStr(key, val) {
    return (key.search(regex) != -1) || (val.toString().search(regex) != -1);
  }

  function keyVal(key, val, ind) {
    var k = '',
        v = '',
        output = '';
    val = val.toString(); // can't use number or boolean
    if (keyOrValFoundInStr(key, val)) {
      k = (key.search(regex) != -1) ? highlightStr(key) : key;
      v = (val.search(regex) != -1) ? highlightStr(val) : val;
      output = indent('<span class="key">' + k + ':</span><span class="value">' + v + '</span>', ind);
    }
    return output;
  }

  function catWithKeyVals(catKey, val, ind) {
    var s = '',
        brackets = ['{', '}'];

    if (typeof val == 'object') {
      for (var key in val) {
        if (typeof val[key] == 'object') {
          if (val instanceof Array) {
            brackets = ['[', ']'];
            s += catWithKeyVals('', val[key], ind + 1);
          } else {
            s += catWithKeyVals(key, val[key], ind + 1);
          }
        } else {
          s += keyVal(key, val[key], ind + 1);
        }
      }
      if (typeof catKey == 'number' || catKey == '') {
        return s ? catBracket(brackets[0], ind) + s + catBracket(brackets[1], ind) : '';
      }
      return s ? catBegin(catKey, brackets[0], ind) + s + catBracket(brackets[1], ind) : '';
    } else {
      return keyVal(catKey, val, ind);
    }
  }

  // main
  $('#search').keyup(function () {
    searchField = $('#search').val();
    regex = new RegExp(searchField, "i");

    var output = '';
    $.getJSON(['data.js'], function (data) {

      $.each(data, function (index, props) {
        var customerStr = '';
        $.each(props, function (key, val) {
          customerStr += catWithKeyVals(key, val, 0);
        });

        if (customerStr && (env == props._details.ENV || env == '')) {
          var fpoUrl = 'https://intservices-'
              + props._details.ENV.toLowerCase()
              + '.sed1.root4.net/fpo/#/'
              + props._details.COUNTRY
              + '/' + props._details.CUSTOMER;
          output += '<div class="panel panel-info">';
          output += '<div class="panel-heading">' + props._details.COUNTRY.toUpperCase() + ' ' + props._details.CUSTOMER + ' <span style="float: right"><a href="' + fpoUrl + '" target="_blank">FPO ' + props._details.ENV + '</a></span> </div>';
          output += '<div class="panel-body">' + customerStr + '</div>';
          output += '</div>';
        }
      });
      if (!searchField) output = '';
      $('#output').html(output);
    });
  });
});
