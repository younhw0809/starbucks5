console.log("안녕");
// 검색기능
const searchEl = document.querySelector('#head_layout .inner .search');
const searchInputEl = document.querySelector('#head_layout .inner .search input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
// console.log(1);
});

searchInputEl.addEventListener('focus',function(){
  searchInputEl.setAttribute('placeholder','통합검색');
  searchEl.classList.add('focused');
  //<input type="text" placeholder="통합검색");
});
searchInputEl.addEventListener('blur',function(){
  searchInputEl.setAttribute('placeholder','');
  searchEl.classList.remove('focused');
});


const badgesEl = document.querySelector('#head_layout .badges');
const totopEl = document.querySelector('#to-top');
// 홈페이지 로드되었을때
window.onload = function() {
  gsap.to(totopEl , .6 ,{
      x:100
    })
}

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    // 배지 숨기기
    //badgesEl.style.display = "none";
    gsap.to(badgesEl , .6 ,{
      opacity : 0,
      display:'none'
    })
    gsap.to(totopEl , .6 ,{
      x:0
    })
  }else{
    // 배지 보이기
    //badgesEl.style.display = "block";
    gsap.to(badgesEl , .6 ,{
      opacity : 1,
      display:'block'
    })
    gsap.to(totopEl , .6 ,{
      x:100
    })
  }
},300));

//상단으로 이동
totopEl.addEventListener('click',function(){
  gsap.to(window, .7 ,{
    scrollTo: 0
  })
});


const fadeEls = document.querySelectorAll('.banner .fade-in');
// console.log(fadeEls);
let sec = 0;
fadeEls.forEach(function(fadeEl,idx){
  if(idx == 1){
    gsap.to(fadeEl,0.3,{
    delay : 4.2,
    opacity:1
    })
  }else{
    gsap.to(fadeEl,1,{
    delay : (sec) * .7,
    opacity:1
    })
    sec++;
  }
});

var swiper1 = new Swiper('.swiper-container', {
  loop : true,
  direction: 'vertical',
  autoplay:true
  
});

var swiper = new Swiper('.swiper', {
  loop : true,
  autoplay:{
    delay: 5000 //5초
  },
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides :true ,// 1번 슬라이드가 가운데
  loopedSlides: 1,
  pagination : {
    el:'.promotion .swiper-pagination',
    clickable : true
  },
  navigation:{
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});
// AWARDS SWIPER
var swiper2 = new Swiper('.awards .awards-swiper',{
  loop : true,
  autoplay:{
    delay: 3000 //5초
  },
  spaceBetween : 34,
  slidesPerView : 5, //한번에 보여줄 슬라이드 개수
  navigation:{
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});
// promotion 토글 기능
// 슬라이드 영역
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역 토글 버튼
const promotionToggleEl = document.querySelector('.toggle-promotion');

// console.log(promotionEl)
// console.log(promotionToggleEl)

promotionToggleEl.addEventListener('click', function(){
  if(promotionEl.classList.contains('hide')){
    // hide 존재
    promotionEl.classList.remove('hide');
    promotionToggleEl.classList.add('rot');
  }else{
    promotionEl.classList.add('hide');
    promotionToggleEl.classList.remove('rot');
  }
});

//스크롤 영역 감지
const spyEls = document.querySelectorAll("#body_layout .scroll-spy");

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({//Scene 감지할 요소 추가
    triggerElement : spyEl,// 보여짐 여부를 감지할 요소
    triggerHook : 0.8 // 화면 80% 지점에서 보여짐 여부 감지
  })
  .setClassToggle(spyEl,'show') // 요소가 화면에 감지되면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 코드 내부에 기능 할당(필수!)
})