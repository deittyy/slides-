'use strict' ;


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slide = document.querySelector('slide');


next.addEventListener('click', function() {
    const items = document.querySelectorAll('.item');

    console.log(items)
    slide.appendChild(items[0])
});
