$(window).on('load',function(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('.svg-loader').fadeOut('slow');
    },1500);
  });


let modal = document.querySelector("#sharing-bar")
let modalbtn=document.querySelector('.popup-link')
modalbtn.addEventListener('click', function () {
  modal.classList.toggle('sharing-bar-active')
})
modal.addEventListener('click', function () {
  modal.classList.remove('sharing-bar-active')
})



$('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  


let btn = document.querySelector('.menu-link')
let modal1 = document.querySelector('.menu-overlay')
let menu = document.querySelector('.site-menu')
btn.addEventListener('click', () => {
  modal1.classList.add('menu-active')
})
menu.addEventListener('click', () => {
  modal1.classList.remove('menu-active')
})

let holder=document.querySelector('.menu-list')

holder.addEventListener('click', function (e) {
e.stopPropagation();
})

let item=document.querySelectorAll('.menu-item')
let txt=document.querySelector('.text-fade')

for(let i=0; i<item.length; i++) {
item[i].addEventListener('mouseover',()=>{
  console.log(item[i].textContent[0]);
  txt.textContent=item[i].getAttribute("value")
})
item[i].addEventListener('mouseout',()=>{
  console.log(item[i].textContent[0]);
  txt.textContent=""
})
}
