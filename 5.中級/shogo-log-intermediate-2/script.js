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

let group1 = document.getElementById("group1");
let dd1 = document.getElementById("dd1");   //  ボタンを取得

let changeElement1 = (el)=> {
  el.classList.toggle('dd1');
}

group1.addEventListener('click', ()=> {
  changeElement1(dd1);
}, false);


let group2 = document.getElementById("group2");
let dd2 = document.getElementById("dd2");   //  ボタンを取得

let changeElement2 = (el)=> {
  el.classList.toggle('dd2');
}

group2.addEventListener('click', ()=> {
  changeElement2(dd2);
}, false);

let group3 = document.getElementById("group3");
let dd3 = document.getElementById("dd3");   //  ボタンを取得

let changeElement3 = (el)=> {
  el.classList.toggle('dd3');
}

group3.addEventListener('click', ()=> {
  changeElement3(dd3);
}, false);

let group4 = document.getElementById("group4");
const dd4 = document.getElementById("dd4");   //  ボタンを取得

let changeElement4 = (el)=> {
  el.classList.toggle('dd4');
}

group4.addEventListener('click', ()=> {
  changeElement4(dd4);
}, false);

let group5 = document.getElementById("group5");
let dd5 = document.getElementById("dd5");   //  ボタンを取得

let changeElement5 = (el)=> {
  el.classList.toggle('dd5');
}

group5.addEventListener('click', ()=> {
  changeElement5(dd5);
}, false);

let mb_menu = document.getElementById("mb-menu");
document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  changeElement(mb_menu);
})

let changeElement = (el)=> {
  el.classList.toggle('mb-menu-active');
}



