gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1 = gsap.timeline()

section1
  .from('.content div h1 span:last-child', {x: '100vw', opacity: 0, duration: 1})
  .from('.content div h1 span:first-child', {x: '-100vw', opacity: 0, duration: 1.5}, '<')
  .set('.content div p', {transformOrigin: "0% 0%"})
  .from('.content div p', { rotation: 75, opacity: 0, duration: 1})
  .from('.content img', { y: '100vh', opacity: 0, duration: .8})

const section2 = gsap.timeline({
  scrollTrigger: {
    trigger:'.section2',
    start: 'top top',
    pin: true,  
    scrub: true,
    //markers: true
  }
})

section2
  .from('.section2 h2 span',{y: '-100vh', opacity:0, stagger:1, duration: 1})
  .fromTo('.section2 p', {scale: 0.2, opacity: 0}, {scale: 1, opacity: 1})

const horizontalSections = gsap.timeline({
  scrollTrigger: {
    trigger:'.horizontal-sections',
    start: 'top top',
    pin: true,  
    scrub: true,
    //markers: true
  }
})

horizontalSections
  .from('.section3 div h2', {x:'-100vw', scale:10, opacity:0, duration:1})
  .fromTo('.section3 div p span', {y: '100vh'},{y:0,backgroundColor: 'white', color: 'black', stagger: .5})
  .to('.section4', {x: "-100%",duration: 1})
  .from('.portfolio-item', {x: '100vw', stagger: .1}, '<')

  

const section5 = gsap.timeline({
  scrollTrigger: {
    trigger:'.section5',
    start: 'top top',
    pin: true,  
    scrub: true,
    //markers: true
  }
})

// 將文字分割成字母，並包裹到 span 裡
const h2 = document.querySelector(".section5 div h2")
const letters = h2.textContent.split("")
h2.innerHTML = letters
  .map((letter) => `<span class="letter">${letter}</span>`)
  .join("")

section5 
  .from('.letter', {y: '-100vh', opacity: 0, duration: 1, stagger: 0.1})
  .from('.section5 div p', { y: '80%', opacity: 0})
  .fromTo('.section5 div button', {scale: 0.2, opacity: 0}, {scale: 1, opacity: 1})
  .from('.section5', { backgroundPositionX: 'calc(100% + 300px)', duration: 1})
  .to('.section5', {backgroundColor: 'black', duration: 2}, '<')