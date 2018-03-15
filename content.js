// Make sure it only runs on reddit sites
if (window.location.href.includes("reddit")) {

  // Get all bookmarks along the top row
  var bookmarkBar = document.getElementsByClassName('subbarlink');

  // Function that we call later
  var addNewOption = function(bi) {

    // Loop through the bookmarked subreddits.
    for (var index = bi ; index < bookmarkBar.length; index++) {
      // Create a new a element
      var a = document.createElement('a')
      // Set the desination of the link to its parent subreddit  with /new added onto the end
      a.href = bookmarkBar[index].href + "/new"
      // set the text of the string so that we have something to click
      a.innerText = " (n)"
      // Add the new a element to its parent subreddit bookmark.
      bookmarkBar[index].appendChild(a);
    }
  }

  // Loop through them
  for (var i = 0; i < bookmarkBar.length; i++) {
    // We want a process to happen when the following if statement returns true
    if (bookmarkBar[i].innerText === 'EDIT') {

      // Set new bookmark index to be one greater than Edit bookmark
      var bi = i + 1
      // Call the above function, passing it our new bookmark-index number
      addNewOption(bi)
    }

  }
}
