/* review */
const swiper2 = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".review__slider-pagination",
    },
  });
  
  const swiper3 = new Swiper(".swiper-change", {
    pagination: {
      el: ".change__slider-pagination",
      type: "fraction",
    },
    scrollbar: {
      el: ".change__slider-scrollbar",
      //  hide: true,
    },
  });



  'use strict';

function mainSlider () {
  let mySwiper = '';
  let breakpoint = window.matchMedia('(max-width: 767px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      });
      return;
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

mainSlider();




/* tabs */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs-btn');
  const tabsContent = document.querySelectorAll('.tabs-content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs-btn__active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-btn__active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs-content__active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__active');
  }
})