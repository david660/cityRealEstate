function blurer() {
  let blur = document.querySelector(".blurer")
  let banner = document.querySelector(".banner")
  let i = 1;
  setInterval(()=>{
    blur.classList.add("blur")
    setTimeout(()=>{
      blur.classList.remove("blur")
    }, 7900)
    banner.src = `uploads/slider_0${i}.jpg`
    i++
    if (i == 4) {
      i = 1
    }
  }, 8000);  
}

blurer()


//service container animation 
// function isElementInViewPort(el) {
//   var $el = $(el);
//   //get the scroll position of the page
//   var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//   var viewportTop = $(scrollElem.scrollTop());
//   var viewportBottom = viewportTop + $(window).height();
//   //get position of the element on the page
//   var elemTop = Math.round($elem.offset().top);
//   var elemBottom = elemTop + $elem.height();

//   return ((elemTop<viewportBottom) && (elemBottom > viewPortTop));
// }
// //check if its time to start the animation
// function checkAnimation() {
//   var $elem = $('.service-cont');

//   //if the animation has already begun
//   if($elem.hasClass('start')) return;
//   if (isElementInViewPort($elem)) {
//     //start the animation
//     $elem.style.animationName = "mover";
//   }
// }
// //capture scroll event
// $(window).scroll(function(){
//   checkAnimation();
// })

//customers review slider

function customer(){
  const reviews = ["wonderful support", "Awesome service", "Great & Talented team", "wonderful support", "Awesome service", "Great & Talented team"]
  const reviewDetails = ["they have got my project on time with the competition with a sed, highly skilled and experienced & professional team", "Explain to you how all these mistaken idea of denouncing pleasure and praising pain was born, and I will tell you", "the master builder of human happiness no one rejects, dislikes avoid pleasure itself because it is very pursue pleasure", "they have got my project on time with the competition with a sed, highly skilled and experienced & professional team", "Explain to you how all these mistaken idea of denouncing pleasure and praising pain was born, and I will tell you", "the master builder of human happiness no one rejects, dislikes avoid pleasure itself because it is very pursue pleasure"]
  const names = ["James fernando", "Jacques Phillips", "Venanda Mercy", "James fernando", "Jacques Phillips", "Venanda Mercy"]
  const imagesSource = ["testi_01", "testi_02", "testi_03", "testi_01", "testi_02", "testi_03"]
  const profession= ["teacher", "learner", "stuent", "teacher", "learner", "student"]

  const customerReview = document.querySelector(".customers-review-cont")
  for (let i = 0; i<reviews.length; i++) {
    let review = document.createElement("DIV")
    review.className= "review"
    review.innerHTML= `
      
        <div class="reviewsCont">
          <h4>${reviews[i]}</h4>
        </div>
        <div class="detailsCont">
          <p>${reviewDetails[i]}</p>
        </div>
        <div class="nameCont">
          <div class="nameCont-image"><img src="uploads/${imagesSource[i]}.png" alt="name"></div>
          <div class="customer-name">
            <p>${names[i]}</p>
            <p>${profession[i]}</p>
          </div>
        </div>      
    `
    customerReview.appendChild(review)
  }
}
customer()

function scroll() {
  const scrollRight = 340
  let container = document.querySelector(".customers-review-big-cont")

  window.setInterval(()=>{
    let scrollLeft = container.scrollLeft;
    console.log(scrollLeft)
    container.scrollTo({
      left:scrollRight + scrollLeft,
      behavior:"smooth"
    })
    if(scrollLeft == 1020) {
      container.scrollLeft = 0
    }
  }, 5000)
}

scroll()

function burgerActivate() {
  const navbar = document.querySelector(".nav-bar")
  const burger = document.querySelector(".burger")
  burger.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
  })
}

burgerActivate()