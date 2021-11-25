let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let vidBtn = document.querySelectorAll('.vid-btn');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

vidBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src =btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
});
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween:20,
//     loop:true,
//     autoplay:{
//         dealy:2500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//         640:{
//             sliderPerView:1,
//         },
//         768:{
//             sliderPerView:2,
//         },
//         1024:{
//             sliderPerView:3,
//         },
//     },
// });

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         991: {
//           slidesPerView: 4,
//         },
//         1200: {
//           slidesPerView: 5,
//         },
//       },
// });