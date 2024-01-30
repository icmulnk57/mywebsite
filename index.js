//creating a responsive navabar component

const mobile_nav=document.querySelector('.mobile-navbar-btn');
const headerElm=document.querySelector(".header");
mobile_nav.addEventListener('click',()=>{
  headerElm.classList.toggle('active');
})




// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectionHero);

// creating a portfoli tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elm = document.querySelectorAll(".img-overlay");


p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curlElm) => curlElm.classList.remove("p-btn-active"))

  p_btn_clicked.classList.add("p-btn-active");

  //to find the number in data atrribute
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num)
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)


  p_img_elm.forEach((curlElm) => curlElm.classList.add("p-image-not-active"));

  img_active.forEach((curlElm) => curlElm.classList.remove("p-image-not-active"));


})

// swiper testimonial 



const  myJsmedia=(widthSize)=>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500
    
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500
    
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
const widthSize=window.matchMedia("(max-width:784px)");
myJsmedia(widthSize);

widthSize.addEventListener('change',myJsmedia);



//scroll to top button
const herosection=document.querySelector(".section-hero")
const footerElm=document.querySelector(".section-footer");
const scrollTotop = document.createElement("div");
scrollTotop.classList.add("scrollTop-style");

scrollTotop.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElm.after(scrollTotop);
const scrollTop=()=>{
  herosection.scrollIntoView({behaviour:"smooth"})

}
scrollTotop.addEventListener("click",scrollTop);

// document.querySelector(".hireme-btn").addEventListener("click",(e)=>{
//   e.preventDefault();
//   contactSec.scrollIntoView({behaviour:"smooth"});
// })



const counterNum=document.querySelectorAll(".counter-number");
const speed=100;

counterNum.forEach((curNumber) => {
  const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      // console.log(targetNumber);
      const initialNumber = parseInt(curNumber.innerText);
      // console.log(initialNumber);
      const incrementNumber = Math.trunc(targetNumber / speed);
      // i am adding the value to the main number
      // console.log(incrementNumber);

      if (initialNumber < targetNumber) {
          curNumber.innerText = `${initialNumber + incrementNumber}+`;
          setTimeout(updateNumber, 10);
      } else {
          curNumber.innerText = `${targetNumber}+`;
      }

  };
  updateNumber();
});









