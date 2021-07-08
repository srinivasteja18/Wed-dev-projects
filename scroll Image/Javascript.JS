
const div = document.querySelector('.text');

const images = div.querySelectorAll('img');


function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

function animateImages(){
    images.forEach(image =>{
        const scrolledUpTo = (window.scrollY+window.innerHeight) - (image.height)/2;
        const isScrolledUp = image.offsetTop < scrolledUpTo;
        const scrolledDownTo = window.scrollY < (image.offsetTop+image.height);
        if(isScrolledUp && scrolledDownTo)
            image.classList.add('active');
        else
            image.classList.remove('active');
    });
}


window.addEventListener('scroll',debounce(animateImages));