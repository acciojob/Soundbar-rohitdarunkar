const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // STOP BUTTON
    if (button.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove();
        currentAudio = null;
      }
      return;
    }

    // STOP PREVIOUS AUDIO
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove();
    }

    // CREATE AUDIO ELEMENT (IMPORTANT FOR CYPRESS)
    const soundName = button.getAttribute("data-sound");
    const audio = document.createElement("audio");
    audio.src = `sounds/${soundName}.mp3`;
    audio.autoplay = true;

    document.body.appendChild(audio);
    currentAudio = audio;
  });
});
