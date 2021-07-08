
const videoPlayer = document.querySelector('.videoPlayer');
const video = videoPlayer.querySelector('video');
const elements = videoPlayer.querySelector('.elements');
const progress = elements.querySelector('.progress');
const progressBar = elements.querySelector('.progressBar');
const playButton = elements.querySelector('.playPause');
const volumeRange = elements.querySelector('.volume');
const speed = elements.querySelector('.playBackSpeed');
const backward = elements.querySelector('.backward');
const forward = elements.querySelector('.forward');
const expand = elements.querySelector('.expand');
console.log(video);

//functions
function videoPlay(){
    if(video.paused) video.play();
    else video.pause();
    if(playButton.innerHTML === "||") playButton.innerHTML="►";
    else playButton.innerHTML="||";
    syncProgressBar();
}
function handleVolume(){
   video.volume = (this.value)/100;
}
function handleSpeed(){
    const val = 1 + this.value/100;
    video.playbackRate = val;
    syncProgressBar();
}
function handleBackwardSkip(){
    video.currentTime -=10;
    syncProgressBar();
}
function handleForwardSkip(){
    video.currentTime +=25;
    syncProgressBar();
}
function syncProgressBar(){
    const time = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${time}%`;
}
function handleProgress(e){
    let wid;
    if(video.style.width == "1200px")
         wid = (e.offsetX/1200)*100;
    else
        wid = (e.offsetX/640)*100;
    console.log(wid);
    const time = (video.duration*wid)/100;
    progressBar.style.flexBasis = `${wid}%`;
    video.currentTime = time;
}
function handleExpand(){
    if(video.style.width == "auto")
        video.style.width = "1200px";
    else 
        video.style.width = "auto";
}

//Event Listeners
video.addEventListener('timeupdate',syncProgressBar);
video.addEventListener('click', videoPlay);
playButton.addEventListener('click',videoPlay);
volumeRange.addEventListener('change',handleVolume);
volumeRange.addEventListener('mousemove',handleVolume);
speed.addEventListener('change',handleSpeed);
backward.addEventListener('click',handleBackwardSkip);
forward.addEventListener('click',handleForwardSkip);
progress.addEventListener('click',handleProgress);
progress.addEventListener('drag',handleProgress);
expand.addEventListener('click',handleExpand);