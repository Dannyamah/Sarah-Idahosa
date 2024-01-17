// scripts.js

$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
});


// Get the SVG element
var svg = document.querySelector(".svg-wrapper svg");

// Get the button element
var button = document.querySelector(".navbar-toggler");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Toggle the "open" class on the SVG element
  svg.classList.toggle("open");
});


$('.navbar-toggler').click(function () {
  $('.svg-wrapper').toggleClass('open');
});



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
  
    // Get the modal
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById("myImg");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
  
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
    
    
    $.ajax({
      url: "https://formsubmit.co/ajax/your@email.com",
      method: "POST",
      data: {
          name: "FormSubmit",
          message: "I'm from Devro LABS"
      },
      dataType: "json"
  });

  