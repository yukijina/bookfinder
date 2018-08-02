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
