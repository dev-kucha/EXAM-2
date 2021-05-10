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
console.log(arrowDown); //видалити
arrowDown.addEventListener('click', function () {
    console.log();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth', block: 'start'
    })
}
)
arrowDown.addEventListener('mouseover', function () {

})
    ;