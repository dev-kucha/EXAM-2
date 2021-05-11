`use strict`;

/* Плавна прокрутка меню */
let anchors = document.querySelectorAll('.menu a[href*="#"]');
let bulbs = document.querySelectorAll('.menu .bulb');
//console.log(anchors); //видалити
//console.log(bulbs); //видалити
for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}

/* Стрілка вниз */
let arrowDown = document.querySelector('.arrow-dow');
//console.log(arrowDown); //видалити
arrowDown.addEventListener('click', function () {
    //console.log();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth', block: 'start'
    })
}
)
    /* arrowDown.addEventListener('mouseover', function () {
    
    }) */
    ;

/* Слайдер вертикальний */
let slidesV = document.querySelector('.slider-v__slides');
let topV = 0;
let bulbsV = document.querySelectorAll('.slider-v__pagination-item');
console.log(bulbsV);

for (let i = 0; i < bulbsV.length; i++) {
    bulbsV[i].addEventListener('click', function () {
        slidesV.style.top = `${topV - 100 * i}vh`;
        for (let j = 0; j < bulbsV.length; j++) {
            j == i ? bulbsV[j].classList.add('bulb--active') : bulbsV[j].classList.remove('bulb--active');
        }
    });
}

/* for (bulbV of bulbsV) {
    bulbV.addEventListener('click', function () {
        console.log(bulbV);
        console.log(bulbV.scrollIntoView);
        topV -= 100;
        slidesV.style.top = `${topV}vh`;
        console.log(slidesV.style.top);
    })
}; */