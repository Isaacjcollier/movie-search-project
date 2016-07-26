$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault()
    var id = $('titleSearch').val()
    var urlMovie = 'http://img.omdbapi.com/?t=' + id

    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: urlMovie
    }).done(function (results) {
      console.log(results);
    })
  })
})
