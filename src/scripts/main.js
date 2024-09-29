const curiosities = document.querySelectorAll('[data-curiosities]');

for (let i = 0; i < curiosities.length; i++){
    curiosities[i].addEventListener('click',shutOrOpenCuriosities);
}

function shutOrOpenCuriosities(clickElement){
    const classe ='quest__link__curiosities--is-open';
    const elementoPai = clickElement.currentTarget.parentNode;
    
    elementoPai.classList.toggle(classe);
    
    
    const clickAlvo = clickElement.currentTarget; 
    console.log(clickAlvo);
}

const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume-slider');
const muteButton = document.getElementById('mute-unmute');


playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});


volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
});


muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});


