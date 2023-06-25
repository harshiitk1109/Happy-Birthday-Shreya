function blowCandle() {
  var gif = document.getElementById("gif");
  gif.src = "WhatsApp Video 2023-06-21 at 18.47.19.mp4";
  gif.play();
  var blowCandleLink = document.getElementById("blowCandleLink");
  blowCandleLink.style.display = "none";
  var cutCakeLink = document.getElementById("cutCakeLink");
  cutCakeLink.style.display = "inline-block";
}

function cutCake() {
  
  var gif = document.getElementById("gif");
  gif.src = "video3.mp4";
  gif.play();
}
    // Retrieve the audio element
    const bgMusic = document.getElementById('bgMusic');

    // Play the audio when the page is shown or reloaded
    window.onpageshow = function(event) {
      if (event.persisted) {
        bgMusic.play();
      }}
