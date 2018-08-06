//Click and Toggle : page view change
$('#searchBtn, #goBack').click(function(){
  $('#topScreen').toggleClass('openResult')
  $('#openDiv').toggleClass('hideResult')
  $('#bookResult').toggleClass('hidden')
  $('body').toggleClass('wrapper')
  $('#goBack').toggleClass('back-button')
 console.log('working');
})

//Click and go back to search page
$('#goBack').click(function(){
  document.getElementById('search').value = ""
  $('#bookResult').html("")
  console.log('clear')
})


//Book Search - API function
function bookSearch() {
  var search = document.getElementById('search').value

  console.log('running')

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search, //what ever user added
    dataType: "json",

    success: function(data) {
      for (var i = 0; i < data.items.length; i++) {
        //create new Div to make page responsive(bootstrap)
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

        // if author is not fund, "no found"
        if (iData.authors) {
          author.textContent = "Author: " + iData.authors[0]
        } else {
          author.textContent = "No author found"
        }
        // if no image, display "no image" picture
        if (iData.imageLinks) {
          image.src = iData.imageLinks.thumbnail
        } else {
          image.src = "img/nobook.jpeg"
        }

         //bookResult.innerHTML +=

         // div(#bookResult) - div(wrapper) - other el
         $('#bookResult').append(wrapper)
         $(wrapper).append([title, author, rating, image, a])
        }
      },
      type: 'GET'
    }) //end of ajax
  } // end of function booksearch()

// after click, book search initiates
document.getElementById('searchBtn').addEventListener('click',bookSearch, false)
