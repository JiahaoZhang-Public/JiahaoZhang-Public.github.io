const video = document.querySelector("video");
const playButton = document.querySelector(".play-demo");

playButton.hidden = false;
playButton.addEventListener("click", () => {
  video.play().catch(() => {
    // Native controls remain available if automatic playback is rejected.
    playButton.hidden = true;
    video.focus();
  });
});
video.addEventListener("play", () => {
  playButton.hidden = true;
});
video.addEventListener("ended", () => {
  playButton.hidden = false;
});
