// Generated by CoffeeScript 2.7.0
(function() {
  var show_text, split;

  split = function() {
    var i, text, words;
    words = $('h2').text().split('');
// Build array
// console.log(words)
    for (i in words) {
      i = i;
      words[i] = '<span>' + words[i] + '</span>';
    }
    // Wrap each letter in a span
    text = words.join('');
    // Join
    $('h2').html(text);
  };

  // Update html
  show_text = function() {
    var count, end_time, in_speed, length;
    split();
    in_speed = 10;
    count = 0;
    length = $('.current_step p span').length;
    end_time = length * in_speed + 200;
    $('h2 span').each(function() {
      $(this).delay(1300 + in_speed * count).animate({
        opacity: '1'
      }, 200);
      count++;
    });
  };

  show_text();

}).call(this);
