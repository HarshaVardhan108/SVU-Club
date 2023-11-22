// Function to open the link when the button is clicked
function openLink() {
    // Replace the link below with your desired link
    var link = "https://forms.gle/TgWYTeD9Sa2XMZDR7";
    
    // Open the link in a new tab/window
    window.open(link, '_blank');
  }

  // Add a click event listener to the button
  document.getElementById("openLinkButton").addEventListener("click", openLink);