const track = document.querySelector('.slide_track');
const slideTrack = document.querySelectorAll('.slide_track');

let x1 = null;
let x2 = null;
let moveInterval = null;
let trackPosition = Math.floor(Number(getComputedStyle(track).left.slice(0, -2)));

document.addEventListener('touchstart' , (event) => {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
});

document.addEventListener('touchmove', (event) => {
    const moveTouch = event.touches[0];
    trackPosition = Math.floor(Number(getComputedStyle(track).left.slice(0, -2)));

    x2 = moveTouch.clientX;
    moveInterval = Math.floor((x2 - x1) + trackPosition);

    if (moveInterval >= 0) {
        moveInterval = 0;
    } else if (moveInterval <= -2048) {
        moveInterval = -2048;
    }

    if (moveInterval <= -60 && moveInterval >= -1024) {
        moveInterval = -1024;
    } else if (moveInterval <= -1084 && moveInterval >= -2048) {
        moveInterval = -2048;
    }

    track.style.left = moveInterval + 'px';
    console.log('moveInterval', moveInterval);

});
