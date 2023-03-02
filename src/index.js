const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const dotContainer = document.querySelector('.dotcontainer');

const imgCount = slider.childElementCount;
let position = 0;

leftButton.addEventListener('click', () => {
    if (position > 0) {
        position -= 1;
        draw();
    }
});

rightButton.addEventListener('click', () => {
    if (position < imgCount - 1) {
        position += 1;
        draw();
    }
});

for (let i = 0; i < imgCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', (e) => {
        position = i;
        draw();
    });
    dotContainer.appendChild(dot);
}

function draw () {
    slider.style.transform = `translate(${-position * 800}px, 0px)`;

    dotContainer.childNodes.forEach(element => {
        element.style.transform = 'scale(1)';
        element.style.margin = '8px 8px'
        element.style.backgroundColor = 'rgba(200, 200, 200, 0.8';
    });

    dotContainer.childNodes[position].style.transform = 'scale(1.5)';
    dotContainer.childNodes[position].style.margin = '8px 16px'
    dotContainer.childNodes[position].style.backgroundColor = 'rgba(255, 255, 255, 1';

    leftButton.style.opacity = position < 1 ? '0' : '1';
    rightButton.style.opacity = position >= (imgCount - 1) ? '0' : '1';
}

draw();
