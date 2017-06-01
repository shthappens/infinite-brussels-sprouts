// YOUR CODE GOES HERE

$('.more-sprouts').on('click', (event) => {
  event.preventDefault();

  let pageNumber = 0;
  pageNumber++;

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + pageNumber
  });

  request.done((data) => {
    data.forEach(function(tweet) {
      $('.tweets').append("<li class = 'tweet'><div class = body>" + tweet.text + "</div><div class = user>" + tweet.username + "</div></li>");
    });
  });

});
