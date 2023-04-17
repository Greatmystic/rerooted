function showContent() {
    var content = document.getElementById("hidden-content");
    content.style.opacity = "1";
    var audio = document.getElementById("audio");
    audio.play();
    var box = document.getElementById("box");
    box.style.display = "none";
    box.onclick = null;
  }

  function showContent2() {
    var content = document.getElementById("hidden-content2");
    content.style.opacity = "1";
    var box = document.getElementById("boxEnd");
    box.style.display = "none";
    box.onclick = null;
  }

  function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "BLUEBEAK") {
      // Display the content if the correct password is entered
      document.getElementById("content").style.display = "block";
      document.getElementById("message").innerHTML = "";
    } else {
      // Show an error message if the password is incorrect
      document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
  }

  function checkPassword2() {
    var password = document.getElementById("password").value;
    if (password === "COGNITIVERECALL") {
      // Display the content if the correct password is entered
      document.getElementById("content").style.display = "block";
      document.getElementById("message").innerHTML = "";
    } else {
      // Show an error message if the password is incorrect
      document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
  }