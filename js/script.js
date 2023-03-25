function showContent() {
    var content = document.getElementById("hidden-content");
    content.style.opacity = "1";
    var audio = document.getElementById("audio");
    audio.play();
    var box = document.getElementById("box");
    box.style.display = "none";
    box.onclick = null;
  }