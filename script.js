//slider alanı ıcın
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

// Don't forget to use the polyfill for forEach! :) 

document.querySelectorAll('.number-animate').forEach( (el) => {
    const endValue = el.getAttribute('data-end-value');
    const incrementValue = el.getAttribute('data-increment');
    const durationValue = el.getAttribute('data-duration');
    
    if (endValue) numberAnimation(el, endValue, incrementValue, durationValue);
    
  });
  
  
  function numberAnimation(el, endValue, incrementor, duration) {
    anime({
      targets: el,
      textContent: endValue,
      round: incrementor ? 1/incrementor : 1/5,
      easing: 'easeInOutQuad',
      duration: duration ? duration : 4000,
    });
  }