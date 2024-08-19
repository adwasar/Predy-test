import $ from 'jquery';
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './scss/main.scss'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 17,
  preloadImages: false, 
  grabCursor: true,
  pagination: {
    el: '.custom-slider__pagination',
  },
  navigation: {
    nextEl: '.custom-slider__btn-next',
    prevEl: '.custom-slider__btn-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

const $burgerBtn = $('.custom-burger-btn');
const $burgerMenu = $('.custom-burger-menu');

$burgerBtn.on('click', function() {
  $(this).toggleClass('custom-burger-btn--active');
  $burgerMenu.toggleClass('custom-burger-menu--active');
});
