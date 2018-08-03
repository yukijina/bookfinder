// When user clicks on the button, open modal
$('button').click(function() {
  $('.modal').css('display', 'block')
  console.log('working!')
})

// When user clicks on the <span>, close modal
$('span').click(function() {
  $('.modal').css('display', 'none')
  console.log('running!')
})



function bookSearch() {
  var search = document.getElementById('search').value
  var modalContent = document.getElementsByClassName('modal-content')[0]

  console.log(search)

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search, //what ever user added
    dataType: "json",

    success: function(data) {
      for (var i = 0; i < data.items.length; i++) {
        modalContent.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
        }
      },
      type: 'GET'
    }) //end of ajax
  } // end of function booksearch()

document.getElementById('myBtn').addEventListener('click', bookSearch, false)
