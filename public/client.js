// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('form').submit(function(event) {
    event.preventDefault();
    var url = $('input').val();
    console.log('client', url)

    $.post('/new?' + $.param({url: url}), function( data ) {
      data = JSON.parse(data);
      $('<li></li>').html("<p>Linked Url: </p><a href=" + data.linkedUrl + ">" + data.linkedUrl + "</a> <p>Original Url: </p><a href=" + data.originalUrl + ">" + data.originalUrl + "</a>").appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});
