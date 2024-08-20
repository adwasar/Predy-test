import $ from 'jquery'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import intlTelInput from 'intl-tel-input'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './scss/main.scss'
import 'intl-tel-input/build/css/intlTelInput.css'

$(document).ready(function () {
  const $burgerBtn = $('.custom-burger-btn')
  const $closePopupBtn = $('.custom-popup__btn-close')
  const $contactSalesHeaderBtn = $('.custom-header__contact-sales')
  const $contactSalesBurgerMenuBtn = $('.custom-burger-menu__contact-sales')
  const $contactSalesPopupBtn = $('.custom-popup__contact-sales-btn')
  const $runThePlerdy = $('.custom-hero__btn')
  const $boostMyWebsite = $('.custom-boost-me__btn')

  const $nameInput = $('.custom-popup__input-name')
  const $phoneInput = $('.custom-popup__input-phone')
  const $nameErrMes = $('.custom-popup__name-error-message')
  const $phoneErrMes = $('.custom-popup__phone-error-message')

  const $burgerMenu = $('.custom-burger-menu')
  const $popUp = $('.custom-popup')
  const $popUpWindow = $('.custom-popup__window')
  const $form = $('.custom-popup__form')

  new Swiper('.swiper', {
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

  const closePopup = () => {
    $popUp.removeClass('custom-popup--active')
    $('body').css('overflow', 'auto')
  }

  const openPopup = () => {
    $popUp.addClass('custom-popup--active')
    $('body').css('overflow', 'hidden')
  }

  $burgerBtn.on('click', function () {
    $(this).toggleClass('custom-burger-btn--active')
    $burgerMenu.toggleClass('custom-burger-menu--active')
  })

  $popUp.on('click', function (e) {
    if (!$(e.target).closest($popUpWindow).length) {
      closePopup()
    }
  })

  $closePopupBtn.on('click', closePopup)
  $runThePlerdy.on('click', openPopup)
  $boostMyWebsite.on('click', openPopup)
  $contactSalesHeaderBtn.on('click', openPopup)
  $contactSalesBurgerMenuBtn.on('click', () => {
    openPopup()
    $burgerMenu.removeClass('custom-burger-menu--active')
  })
  $contactSalesPopupBtn.on('click', (e) => {
    e.preventDefault()
    let isValid = true
    if ($nameInput.val().trim() === '') {
      $nameErrMes.text('Please enter your name') 
      isValid = false
    } else {
      $nameErrMes.text('') 
    }
    if ($phoneInput.val().trim() === '') {
      $phoneErrMes.text('Please enter your phone') 
      isValid = false
    } else {
      $phoneErrMes.text('') 
    }
    if (isValid) {
      $form.submit()

    }
  })

  $phoneInput.on('input', function () {
    const onlyNumbers = this.value.replace(/\D/g, '');
    $(this).val(onlyNumbers);
  });

  intlTelInput($phoneInput[0], {
    initialCountry: 'ua',
    onlyCountries: ['ua', 'gb', 'us'],
  })
})
