
//variables
let slidePosition = 0;

const beats = document.getElementsByClassName('beatInfo');
const totalBeats = beats.length;
const beatImg = document.getElementsByClassName("beat");
const beatDetails = document.getElementsByTagName("ul");
console.log(beatDetails);


//event listeners
document.getElementById('container_button--prev').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('container_button--next').addEventListener("click", function() {
    moveToPrevSlide();
});

for (let image of beatImg) {
    image.addEventListener("click", function() {
        hideDetails();
    });

}




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

function hideDetails() {
    console.log("Trying");
    for (let beatDetail of beatDetails) {
        beatDetail.classList.toggle("ul--hidden");

    }

    for (let beat of beats) {
        beat.classList.toggle("beatInfo--noDetails");
    }
}