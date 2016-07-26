$(function() {
  console.log('sanity check');
  $('form').on('submit', function (event) {
    event.preventDefault()
    var id = $('#titleSearch').val()
    var urlMovie = 'http://omdbapi.com/?t=' + id

    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: urlMovie
    }).done(function (results) {
      console.log(results);
      var image = results.Poster
      $('#posterImage').append('<div><img class="poster" width="300" height="400" src="' + image +'"> <h1>' +results.Title + '</h></div>')
      console.log(image);
      // $('#posterImage > .poster').append('<h1>' +results.Title + '</h1>')
      for (var i = 0; i < results.Genre.length; i++) {
        $('#genreList').append(results.Genre[i])
      }
    })
  })
})
