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
  