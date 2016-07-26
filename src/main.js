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
      $('#posterImage').attr('src', image)
      console.log(image);
    })
  })
})
