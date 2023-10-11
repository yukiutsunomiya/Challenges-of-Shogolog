const swiper = new Swiper('.swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  initialSlide: 1,
  loopedSlides:1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  grabCursor: true,
  centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1.5, 
    },
    700: {
      slidesPerView: 'auto',
      loopedSlides:3,
    },
  }
});

document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})



