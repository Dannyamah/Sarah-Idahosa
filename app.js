// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const galleryPics = document.querySelectorAll(".gallery-pic");
  
    galleryPics.forEach((pic) => {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      const downloadIcon = document.createElement("div");
      downloadIcon.classList.add("icon");
      downloadIcon.innerHTML = "&#x1F4E5"; // Unicode for download icon
      downloadIcon.addEventListener("click", function () {
        // Add functionality for download action
        alert("Download clicked!");
      });
  
      const jpgIcon = document.createElement("div");
      jpgIcon.classList.add("icon");
      jpgIcon.innerHTML = "&#x1F5C4"; // Unicode for file-image icon
      jpgIcon.addEventListener("click", function () {
        // Add functionality for jpg action
        alert("JPG clicked!");
      });
  
      overlay.appendChild(downloadIcon);
      overlay.appendChild(jpgIcon);
      pic.appendChild(overlay);
    });
  });

  // DOWNLOAD FROM GALLERY
  function downloadImage(imgPath) {
    let link = document.createElement('a');
    link.href = imgPath;
    link.download = 'download';
    link.click();
}

function viewJpg(imgPath) {
  let modal = document.getElementById("myModal");
  let img = document.getElementById("img01");
  let span = document.getElementsByClassName("close")[0]; // Add this line

  img.src = imgPath;
  modal.style.display = "block";
  setTimeout(function() {
      modal.style.opacity = "1";
  }, 50); // This will start the fade-in effect after 50ms

  span.onclick = function() {
      modal.style.opacity = "0";
      setTimeout(function() {
          modal.style.display = "none";
      }, 500); // This will hide the modal after the fade-out effect is finished
  }
}




    document.addEventListener("DOMContentLoaded", function () {
        var readMoreBtn = document.querySelector('.read-more-btn');
        var hiddenCards = document.querySelectorAll('.card-hidden');

        readMoreBtn.addEventListener('click', function () {
            hiddenCards.forEach(function (card) {
                card.style.display = 'flex'; // Show the hidden cards
            });

            readMoreBtn.style.display = 'none'; // Hide the "Read More" button
        });
    });

    document.getElementById('toggle-cards').addEventListener('click', function() {
      var extraCards = document.querySelectorAll('.extra-card');
      var toggleText = document.getElementById('toggle-text');
      if (toggleText.innerHTML === 'See More') {
        // Show the extra cards with a slide-down animation and change the button text
        extraCards.forEach(function(card) {
          card.style.animationName = 'slideDown';
          card.style.display = 'block';
        });
        toggleText.innerHTML = 'See Less';
      } else {
        // Hide the extra cards with a slide-up animation and change the button text
        extraCards.forEach(function(card) {
          card.style.animationName = 'slideUp';
          setTimeout(function() {
            card.style.display = 'none';
          }, 500); // Match this with the animation-duration in your CSS
        });
        toggleText.innerHTML = 'See More';
      }
      // Move the button to the end of the container
      this.parentNode.appendChild(this);
    });
    
    
    

  