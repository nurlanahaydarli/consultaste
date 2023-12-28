// $('.button').click(function(){
//     var buttonId = $(this).attr('id');
//     $('#modal-container').removeAttr('class').addClass(buttonId);
//     $('body').addClass('modal-active');
//   })
  
//   $('#modal-container').click(function(){
//     $(this).addClass('out');
//     $('body').removeClass('modal-active');
//   });




// let btn=document.querySelector('.modalbtn')
// let menu=document.querySelector('.site-menu')
// btn.addEventListener('click',function(){
// menu.classList.add('menu-active');
// })



// Inline popups




// document.addEventListener('DOMContentLoaded', function () {
//   var flkty = new Flickity('.carousel', {
//     // Flickity options go here
//     // For example:
//     // cellAlign: 'left',
//     // wrapAround: true,
//   });

//   var flkty2 = new Flickity('.carousel2', {
//     // Flickity options go here
//     // For example:
//     // cellAlign: 'left',
//     // wrapAround: true,
//   });

//   // Custom navigation arrows
//   var prevButton = document.querySelector('.prevbtn');
//   var nextButton = document.querySelector('.nextbtn');

//   prevButton.addEventListener('click', function () {
//     flkty.previous();
//     flkty.previous();
//   });

//   nextButton.addEventListener('click', function () {
//     flkty.next();
//     flkty2.next();
//   });
// });



// progress-bar.js

document.addEventListener('DOMContentLoaded', function () {
  var flkty = new Flickity('.carousel2', {
      // Flickity options go here
      // For example:
      // cellAlign: 'left',
      // wrapAround: true,
  });

 
});

$('#to-content').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});


document.addEventListener('DOMContentLoaded', function () {
    var flkty = new Flickity('.carousel2', {
      // Flickity options go here
      // For example:
      // cellAlign: 'left',
      // wrapAround: true,
    });
var prevButton = document.querySelector('.prevbtn');
  var nextButton = document.querySelector('.nextbtn');

  prevButton.addEventListener('click', function () {
    flkty.previous();
    // flkty.previous();
  });

  nextButton.addEventListener('click', function () {
    flkty.next();
    // flkty2.next();
  });})