// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Write your JavaScript code here.
const likeGlyphs = document.querySelectorAll(".like-glyph");

likeGlyphs.forEach((likeGlyph) => {
  likeGlyph.addEventListener("click", function () {
    const activatedHeart = "activated-heart";
    const isLiked = likeGlyph.classList.contains(activatedHeart);

    mimicServerCall()
      .then(() => {
        if (isLiked) {
          likeGlyph.classList.remove(activatedHeart);
          likeGlyph.innerHTML = "&#x2661;";
        } else {
          likeGlyph.classList.add(activatedHeart);
          likeGlyph.innerHTML = "&#x2665;";
        }
      })
      .catch(() => {
        const errorModal = document.getElementById("modal");
        const modalMessage = document.getElementById("modal-message");

        errorModal.classList.remove("hidden");

        modalMessage.textContent = "Oopsies! You can't do that, try again.";

        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
