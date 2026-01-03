let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songName = document.getElementById('songName');
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "Agar Tum Saath Ho", filePath: "songs/1.mp3"},
    {songName: "Kesariya", filePath: "songs/2.mp3"},
    {songName: "Tum Hi Ho", filePath: "songs/3.mp3"}
];

// PLAY / PAUSE
masterPlay.addEventListener('click', () => {
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
    }
});

// PROGRESS BAR
audioElement.addEventListener('timeupdate', () => {
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// SONG ITEM CLICK
songItemPlay.forEach((element, index) => {
    element.addEventListener('click', () => {
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        songName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
    });
});

// NEXT
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;
    audioElement.play();
});

// PREVIOUS
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;
    audioElement.play();
});
