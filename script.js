$(window).load(function () {

  $('#search').keyup(function () {
    var searchField = $('#search').val();
    var regex = new RegExp(searchField, "i");

    function markString(str) {
      var re = new RegExp(searchField, "g");
      str = str.replace(re, '<span class="mark-string">' + searchField + '</span>');
      return str;
    }

    $.getJSON(['data.js'], function (data) {
      var output = '<div class="row">';

      $.each(data, function (key, val) {
        var foundKey = '',
            foundValue = '',
            foundOutput = '';

        for (var v in val) {
          if (typeof val[v] != 'object') {
            if ((val[v].search(regex) != -1) || (v.search(regex) != -1)) {
              v.search(regex) != -1 ? foundKey = markString(v) : foundKey = v;
              val[v].search(regex) != -1 ? foundValue = markString(val[v]) : foundValue = val[v];
              foundOutput += '<div class="key-value">' + foundKey + ': ' + foundValue + '</div>';
            }
          }
        }

        if (foundOutput) {
          output += '<div class="result">';
          output += '<div class="link"><a href="' + '" target="_blank">' + val.name + '</a></div>';
          output += foundOutput;
          output += '</div>';
        }

        output += '</div>';
        val._details.ENV == 'AITE' ? $('#aite').html('<h4>AITE</h4>' + output) : $('#site').html('<h4>SITE</h4>' + output);
      });
    });
  });
});
