const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
let mousedown = false;

function togglePlay(){
    video.paused ? video.play() : video.pause();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += Number(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function scrubProgress(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * 100;
    if(mousedown){
        progressBar.style.flexBasis = `${scrubTime}%`
    }
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", () => mousedown && scrub)
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
progress.addEventListener("mousemove", scrubProgress)
toggle.addEventListener("click", togglePlay);
skipButtons.forEach( button => button.addEventListener("click", skip))
ranges.forEach( range => range.addEventListener("change", handleRangeUpdate))