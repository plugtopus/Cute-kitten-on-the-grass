myAudio = new Audio('/purring_cat.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();