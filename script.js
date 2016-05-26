$(window).load(function () {

  var env = $('input[name="myRadio"]:checked', '#form').val();
  $('#form input').on('change', function() {
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

    var output = '';
    $.getJSON(['data.js'], function (data) {
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

        if (foundOutput && (env == val._details.ENV || env == '')) {
          output += '<div class="result">';
          output += '<div class="link"><a href="' + '" target="_blank">' + val._details.ENV + '</a></div>';
          output += foundOutput;
          output += '</div>';
        }

      });
      $('#output').html(output);
    });
  });
});
