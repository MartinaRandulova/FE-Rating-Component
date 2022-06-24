document.addEventListener("DOMContentLoaded", function (e) {

  var userRating = document.getElementsByClassName('circle');
  var userRatingArr = [...userRating]; //I want to work with Array rather than HTMLCollection
  var userRatingDecision;

  for (var i = 0; i < userRatingArr.length; i++) {
    userRatingArr[i].addEventListener("mousedown", function(e) {
      userRatingDecision = this.innerHTML;
    });
  }

  var submittingWindow = document.getElementById('rating');
  var thankYouWindow = document.getElementById('thank-you');
  var submitButton = document.getElementById('submit-button');
  var userRatingDecisionEl = document.getElementById('selected-number');
  submitButton.addEventListener("mousedown", function(e) {
    if (userRatingDecision) {
      submittingWindow.style.display = "none";
      thankYouWindow.style.display = "grid";
      userRatingDecisionEl.innerHTML = userRatingDecision;
    }
  })

});