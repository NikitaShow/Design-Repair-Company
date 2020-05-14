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
});
