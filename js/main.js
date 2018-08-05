$('#searchBtn, .back-button').click(function(){
  $('#topScreen').toggleClass('openResult')
  $('#openDiv').toggleClass('hideResult')
  $('#bookResult').toggleClass('hidden')
  $('body').toggleClass('wrapper')
 console.log('working');
})

$('.back-button').click(function(){
  document.getElementById('search').value = ""
  console.log('clear')
})



function bookSearch() {
  var search = document.getElementById('search').value

  console.log('running')

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search, //what ever user added
    dataType: "json",

    success: function(data) {
      for (var i = 0; i < data.items.length; i++) {
        var wrapper = document.createElement('div')
        var iData = data.items[i].volumeInfo

        var title = document.createElement('h4')
        var author = document.createElement('p')
        var rating = document.createElement('p')
        var image = document.createElement('img')
        var a = document.createElement('a')

        wrapper.className = 'col-sm-4 my-4 text-center'
        title.className = 'py-3'
        image.className = 'd-block mx-auto my-3'
        title.textContent = iData.title
        rating.textContent = "Average Rating: " + iData.averageRating


        a.href = iData.infoLink
        a.textContent = "Learn More"
        a.className = 'btn btn-outline-info'
        a.target = '_blank'

        if (iData.authors) {
          author.textContent = "Author: " + iData.authors[0]
        } else {
          author.textContent = "No author found"
        }
        if (iData.imageLinks) {
          image.src = iData.imageLinks.thumbnail
        } else {
          image.src = "img/nobook.jpeg"
        }

         //bookResult.innerHTML +=


         $('#bookResult').append(wrapper)
         $(wrapper).append([title, author, rating, image, a])
        }
      },
      type: 'GET'
    }) //end of ajax

  } // end of function booksearch()

document.getElementById('searchBtn').addEventListener('click',bookSearch, false)



// Suspended - modal
//var modalContent = document.getElementsByClassName('modal-content')[0]
//When user clicks on the button, open modal
// $('button').click(function() {
//     $('.modal').css('display', 'block')
//     bookSearch()
//     console.log('working!')
//   })
//
// $('span').click(function displayNone() {
//   $('.modal').css('display', 'none')
//   console.log('running!')
// })
