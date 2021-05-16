`use strict`;

/* Плавна прокрутка меню */
let anchors = document.querySelectorAll('.menu a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start',
            });
        })
    }
}
/* Тоглення маркерів пунктів меню */
let bulbsM = document.querySelectorAll('.menu .bulb');

window.addEventListener('scroll', function () {
    for (anchor of anchors) {
        anchorId = anchor.getAttribute('href');
        section = document.querySelector(anchorId);
        if ((window.pageYOffset + (0.9 * document.documentElement.clientHeight) >= section.offsetTop) && ((window.pageYOffset + 0.9 * document.documentElement.clientHeight) <= (section.offsetTop + section.offsetHeight))) {
            anchor.children[0].classList.add('bulb--active');
        } else {
            anchor.children[0].classList.remove('bulb--active');
        }
    }
})

/* Зміна фона меню під час прокрутки */
let topNavigation = document.querySelector('.top-navigation');
let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    window.pageYOffset >= header.offsetHeight - topNavigation.offsetHeight ? topNavigation.classList.add('top-navigation--fill') : topNavigation.classList.remove('top-navigation--fill');
}
);

/* Стрілка вниз */
let arrowDown = document.querySelector('.arrow-dow');

arrowDown.addEventListener('click', function () {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth', block: 'start'
    })
}
);

/* Слайдер вертикальний */
let slidesV = document.querySelector('.slider-v__slides');
let topV = 0;
let bulbsV = document.querySelectorAll('.slider-v__pagination-item');

for (let i = 0; i < bulbsV.length; i++) {
    bulbsV[i].addEventListener('click', function () {
        slidesV.style.top = `${topV - 100 * i}vh`;
        for (let j = 0; j < bulbsV.length; j++) {
            j == i ? bulbsV[j].classList.add('bulb--active') : bulbsV[j].classList.remove('bulb--active');
        }
    });
}

/* Ініціалізація слайдера горизонтального після готовності DOM */
document.addEventListener('DOMContentLoaded', function () {
    new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 4000,
        swipe: true,
        refresh: false
    });
});

/* Валідація форми */
const form = document.querySelector('.submitForm');
const sendName = document.getElementById('send_name');
const sendemail = document.getElementById('send_email');
const error = document.querySelector('.submitForm__error');

sendemail.addEventListener("input", function (event) {
    if (sendemail.validity.valid) {
        error.innerHTML = "";
        error.className = "submitForm__error";
    }
}, false
);
form.addEventListener("submit", function (event) {
    if (!sendemail.validity.valid) {
        event.preventDefault();
        error.innerHTML = "I expect an e-mail, darling!";
        error.className = "submitForm__error .submitForm__error--active";
    }
}, false);