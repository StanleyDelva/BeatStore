
//variables
let slidePosition = 0;

const beats = document.getElementsByClassName('beatInfo');
const totalBeats = beats.length; 

//event listeners
document.getElementById('container_button--prev').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('container_button--next').addEventListener("click", function() {
    moveToPrevSlide();
});




function updateSlidePosition() {
    for (let beat of beats) {
        beat.classList.remove('beatInfo--visible');
        beat.classList.add('beatInfo--hidden');
    }

    beats[slidePosition].classList.add('beatInfo--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalBeats - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalBeats - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}