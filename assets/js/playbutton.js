function togglePlayPause() {
  var video = document.getElementById("player");
  var playButton = document.querySelector(".play-button");

  if (video.paused) {
    video.play();
    video.setAttribute("controls", "controls"); // Show controls
    playButton.style.display = "none";
  } else {
    video.pause();
    video.removeAttribute("controls"); // Hide controls when paused
    playButton.style.display = "block";
  }
}

function handlePlay() {
  var playButton = document.querySelector(".play-button");
  playButton.style.display = "none";
}

function handlePause() {
  var playButton = document.querySelector(".play-button");
  playButton.style.display = "block";
}
