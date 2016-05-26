$(window).load(function () {

  $('#search').keyup(function () {
    var searchField = $('#search').val();
    var regex = new RegExp(searchField, "i");

    function markString(str) {
      var re = new RegExp(searchField, "g");
      str = str.replace(re, '<span class="mark-string">' + searchField + '</span>');
      return str;
    }

    var output = '<div class="row">';
    $.getJSON('https://raw.githubusercontent.com/lthr/livesearch-jsons/gh-pages/data.js', function (data) {
      $.each(data, function (key, val) {

        var foundKey = '';
        var foundValue = '';
        var foundOutput = '';

        for (var v in val) {
          if ((val[v].search(regex) != -1) || (v.search(regex) != -1)) {
            v.search(regex) != -1 ? foundKey = markString(v) : foundKey = v;
            val[v].search(regex) != -1 ? foundValue = markString(val[v]) : foundValue = val[v];
            foundOutput += '<div class="key-value">' + foundKey + ': ' + foundValue + '</div>';
          }
        }

        if (foundOutput) {
          output += '<div class="result">';
          output += '<div class="link"><a href="#" target="_blank">' + val.name + '</a></div>';
          output += foundOutput;
          output += '</div>';
        }

      });
      output += '</div>';
      $('#results').html(output);
    });
  });
});