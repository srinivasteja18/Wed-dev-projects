window.addEventListener('keydown', function (e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

window.addEventListener('keyup', function (e) {
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");
});