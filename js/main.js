// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });


// $('.loop').owlCarousel({
//     center: true,
//     items:3,
//     loop:true,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        margin:80
    });

  });

  let navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(navLink =>{
      navLink.addEventListener('click',function(){
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

      })
  })



  let mblMenu = document.querySelector('.mobile__nav');
  let trigger = document.querySelectorAll('.nav__trigger');

  trigger.forEach(navBtn =>{
    navBtn.addEventListener('click', function(){
      mblMenu.classList.toggle('active');
    })
  })




