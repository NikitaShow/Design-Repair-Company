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
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
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
        minlength: "Введите корректный номер"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Необходимо принять соглашение"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
     },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          window.location = "thanks.html"
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }, 
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      userAsk: "required",
      policyCheckbox: "required"
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
        minlength: "Введите корректный номер"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      userAsk: "Задайте вопрос",
      policyCheckbox: "Необходимо принять соглашение"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
     },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          window.location = "thanks.html"
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }, 
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
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
        minlength: "Введите корректный номер"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Необходимо принять соглашение"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
     },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          window.location = "thanks.html"
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }, 
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  //Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');
  
  //Второй вариант карты

  //Переменная для включения/отключения индикатора загрузки
var spinner = $('.footer__map').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
    myMapTemp = new ymaps.Map("map", {
    center: [47.208901, 39.631539], // координаты центра на карте
    zoom: 9, // коэффициент приближения карты
  });
  myPlacemarkTemp = new ymaps.Placemark([47.208901, 39.631539], {
      balloonContent: "ТЦ Plaza",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/marker.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.footer__map').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});



  var player; 
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'TXpdkK6lDmk',
      events: {
        'onReady': videoPlay,
      }
    });
  })
  function videoPlay(event) {
    event.target.playVideo();
  }


  
});


