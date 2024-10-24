const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const navbar = document.querySelector('nav');
navbar.style.position = "fixed"

let lastScrollY = 0;

scroll.on('scroll', ({ scroll }) => {
  const currentScrollY = scroll.y;

  if (currentScrollY === 0) {

    gsap.to(navbar, { top: "-100%", duration: 2, ease: "power2.inOut" });
  } 

  else if (currentScrollY > lastScrollY) {

    gsap.to(navbar, { top: "0", duration: 1, ease: "power2.Out" });
  }


  lastScrollY = window.scrollY;
});


let timeLine = gsap.timeline();

timeLine.from("ul li", {
    y: -50,
    scale: 0,
    opacity: 0,
    duration: 2,
    delay: 0.3,
    stagger: 0.4
});

let timeLine1 = gsap.timeline();

timeLine1.from(".icon-div, .title", {
  y: 200,
  opacity: 0,
  delay: 0.3,
  duration: 2.5,
  stagger: 0.4
});


gsap.registerPlugin(ScrollTrigger);
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
      return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();



// Create GSAP animation for the h1 element
let timeLineScrol = gsap.timeline();
gsap.from(".gridContentSection .content1 h1, .content1 h2", {
  y: 500,
  opacity: 0,
  scrollTrigger: {
      trigger: ".gridContentSection",
      start: "top 90%",
      end: "top 40%", 
      scrub: true,
      scroller: '[data-scroll-container]', 
  }
});


gsap.from(".gridContentSection .content2 h1, .content2 h2", {
  y: 600, 
  opacity: 0,
  scrollTrigger: {
      trigger: ".gridContentSection",
      start: "top 60%",
      end: "top 30%", 
      scrub: true,
      scroller: '[data-scroll-container]', 
  }
});

gsap.from(".gridContentSection .gridContent3 h1, .gridContent3 h2", {
  y: 800,
  opacity: 0, 
  scrollTrigger: {
      trigger: ".gridContentSection",
      start: "top 40%",
      end: "top 20%", 
      scrub: true,
      scroller: '[data-scroll-container]', 
  }
});


gsap.from(".gridContentSection .content4", {
  y: 900,
  opacity: 0,
  scrollTrigger: {
      trigger: ".gridContentSection",
      start: "top 0%",
      end: "top -50%", 
      scrub: true,
      scroller: '[data-scroll-container]', 
  }
});




// Create GSAP animation for the flex element....
let timeLineFlex = gsap.timeline({
  scrollTrigger: {
      trigger: ".flexContainerContent",
      scroller: "[data-scroll-container]",
      start: "top 50%",
      end: "top 0%",
      scrub: 3,
  }
});


gsap.from(".ContentContainer h1, .ContentContainer .flexContainer .img-div", {
  x: -300,
  duration: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".flexContainerContent",
    scroller: "[data-scroll-container]",
    start: "top 40%",
    end: "top 0%",
    scrub: 3,
}
});

gsap.from(".ContentContainer .flexContainer .textContainer", {
  x: 800,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".flexContainerContent",
    scroller: "[data-scroll-container]",
    start: "top 40%",
    end: "top 0%",
    scrub: 3,
}
})






// Create the horizontal scrolling effect for last slider

const scrollWrapper = document.querySelector('.scroll-wrapper');

gsap.to('.scroll-wrapper', {
  x: () => `-${document.querySelector('.scroll-wrapper').scrollWidth - window.innerWidth}px`,
  ease: 'none',
  scrollTrigger: {
      trigger: '.scrollSlider',
      start: 'top top',
      end: () => `+=${document.querySelector('.scroll-wrapper').scrollWidth}`,
      scrub: true, 
      pin: ".scrollSlider", 
      scroller: '[data-scroll-container]', 

  }
});





// POSTER SLIDER OR SWIPERJS ANIMATION...
gsap.from(".PosterSliderContainer", {
  y: 500,
  duration: 3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".swiper-slide",
    scroller: "[data-scroll-container]",
    start: "top 60%",
    end: "top 25%",
    scrub: 5,
}
})




var swiper = new Swiper(".mySwiper", {
    speed: 1000, // Slide change speed
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });




