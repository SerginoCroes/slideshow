const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const dotContainer = document.querySelector('.dotcontainer');
const imgCount = slider.childElementCount;
let position = 0;
let timeOut;

leftButton.addEventListener('click', () => {
    if (position > 0) moveImg(position -= 1);
});

rightButton.addEventListener('click', () => {
    if (position < imgCount - 1) moveImg(position += 1);
});

for (let i = 0; i < imgCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => moveImg(i));
    dotContainer.appendChild(dot);
}

function moveImg(i) {
    clearTimeout(timeOut);
    position = i;
    draw();
    nextSlide();
}

function draw() {
    slider.style.transform = `translatex(${-position * 100}%)`;
    dotContainer.childNodes.forEach((element, index) => {
        element.style.transform = index === position ?  'scale(1.5)' : 'scale(1)';
        element.style.margin = index === position ? '6px 12px' : '6px';
        element.style.backgroundColor = index === position ? 'rgba(255, 255, 255, 1' : 'rgba(200, 200, 200, 0.8';
    });
    leftButton.style.opacity = position < 1 ? '0' : '1';
    rightButton.style.opacity = position >= (imgCount - 1) ? '0' : '1';
}

function nextSlide() {
    timeOut = setTimeout(() => {
        if (position < (imgCount - 1)){
            position += 1;
        } else {
            position = 0;
        }
        draw();
        nextSlide();
    }, 5000);
}

draw();
nextSlide();