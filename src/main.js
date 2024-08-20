import $ from 'jquery'
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

const $burgerBtn = $('.custom-burger-btn')
const $closePopupBtn = $('.custom-popup__btn-close')

const $contactSalesBtn = $('.custom-header__contact-sales')
const $runThePlerdy = $('.custom-hero__btn')
const $boostMyWebsite = $('.custom-boost-me__btn')

const $burgerMenu = $('.custom-burger-menu')
const $popUp = $('.custom-popup')
const $popUpWindow = $('.custom-popup__window')

const closePopup = () => {
  $popUp.removeClass('custom-popup--active')
  $('body').css('overflow', 'auto');
}

const openPopup = () => {
  $popUp.addClass('custom-popup--active')
  $('body').css('overflow', 'hidden');
}

$burgerBtn.on('click', function () {
  $(this).toggleClass('custom-burger-btn--active')
  $burgerMenu.toggleClass('custom-burger-menu--active')
})

$popUp.on('click', function(e) {
  if (!$(e.target).closest($popUpWindow).length) {
    closePopup();
  }
});

$closePopupBtn.on('click', closePopup)

$contactSalesBtn.on('click', openPopup);
$runThePlerdy.on('click', openPopup);
$boostMyWebsite.on('click', openPopup);
