"use strict";
window.addEventListener('DOMContentLoaded', function() {

    const slides = document.querySelectorAll('.slide-wrapper'),
          prev = document.querySelector('.product-shell__arrows-prev'),
          next = document.querySelector('.product-shell__arrows-next'),
          slidesWrapper = document.querySelector('.product-slider'),
          slidesField = document.querySelector('.product-slider__inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    })

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    // const lastSlide = document.querySelectorAll('.last-slider__wrapper'),
    //       lastPrev = document.querySelector('.product-shell__arrows-prev-last'),
    //       lastNext = document.querySelector('.product-shell__arrows-next-last'),
    //       lastWrapper = document.querySelector('.last-slider'),
    //       lastField = document.querySelector('.last-slider__inner'),
    //       lastWidth = window.getComputedStyle(lastWrapper).width;

    // let lastOffset = 0;

    // lastField.style.width = 65 * lastSlide.length + '%';

    // lastSlide.forEach(slide => {
    //     slide.style.width = width;
    // })

    // lastNext.addEventListener('click', () => {
        
    // });

    // lastPrev.addEventListener('click', () => {
    //     func(lastSlide, lastField)
    // });

    // function funcTwo (test, test1) {
    //     if (offset == +width.slice(0, width.length - 2) * (test.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }

    //     test1.style.transform = `translateX(-${offset}px)`;
    // }

    // function func (test, test1) {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (test.length - 1)
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }

    //     test1.style.transform = `translateX(-${offset}px)`;
    // }

    const lastSlide = document.querySelectorAll('.last-slider__wrapper'),
          lastPrev = document.querySelector('.product-shell__arrows-prev-last'),
          lastNext = document.querySelector('.product-shell__arrows-next-last'),
          lastWrapper = document.querySelector('.last-slider'),
          lastField = document.querySelector('.last-slider__inner'),
          lastWidth = window.getComputedStyle(lastWrapper).width;

    let lastOffset = 0;

    lastField.style.width = 65 * lastSlide.length + '%';

    lastSlide.forEach(slide => {
        slide.style.width = width;
    })

    lastNext.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (lastSlide.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        lastField.style.transform = `translateX(-${offset}px)`;
    });
    
    lastPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (lastSlide.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        lastField.style.transform = `translateX(-${offset}px)`;
    });

});

