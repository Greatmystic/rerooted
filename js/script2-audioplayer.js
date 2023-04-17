function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
  var box = document.getElementById("box");
  box.style.display = "none";
  box.onclick = null;
  audio.addEventListener("ended", () => {
    audio.currentTime = 0; // Reset audio playback to the beginning
    audio.play(); // Play the audio again
  });
  
  audio.play(); // Start playing the audio
}