// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   closeBtn.addEventListener('click', switchModal);
// });

// document.body.addEventListener('keyup', function(event){
//   if (event.keyCode == 27) {
//   modal.classList.remove('modal--visible');
// };
// });

// modal.onclick = function (event) {
//   if (event.target == modal) {
//   modal.classList.remove('modal--visible');
// };
// }; 

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      top_show = 300,
      delay = 1500;

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });    
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  }); 

  $(window).scroll(function() {
    if ($(window).scrollTop() > top_show) $('.button__top').fadeIn();
      else $('.button__top').fadeOut();
  });
  $('.button__top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 25 + bullets.width()+13)
  bullets.css('left', prev.width() + 17)

  new WOW().init();

  //валидация формы

  $('.modal__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required",
    },
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не менее двух символов",
        maxlength: "Не более пятнадцати символов"
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Заполните поле"
    }
  });
  $('.footer__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не менее двух символов",
        maxlength: "Не более пятнадцати символов"
      }, 
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Заполните поле"
    }
  });
  $('.control__form').validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required",
      
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не менее двух символов",
        maxlength: "Не более пятнадцати символов"
      }, 
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Заполните поле"
    }
  });
  //Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');
});


