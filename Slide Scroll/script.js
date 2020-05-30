//Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    sliderImages.forEach(sliderImage => {
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight);
        // console.log(slideInAt);
        sliderImage.height / 2; //this will give the pixel level when the each of the image should be slide in & at!
        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrollPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));