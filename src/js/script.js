const track = document.querySelector('.slide_track');

let x1 = null;
let x2 = null;
let moveInterval = null;

document.addEventListener('touchstart' , (event) => {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
});

document.addEventListener('touchmove', (event) => {
    const moveTouch = event.touches[0];
    x2 = moveTouch.clientX;
    moveInterval = Math.floor(x2 - x1);
    trackPosition = Math.floor(Number(getComputedStyle(track).left.slice(0, -2)));
    console.log("moveInterval", moveInterval);
    console.log("trackPosition", trackPosition);
    //track.style.left = Math.floor(trackPosition + moveInterval) + 'px';
    if (moveInterval < trackPosition) {
        track.style.left = "-1024px"
    }
});
