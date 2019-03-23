$(document).ready(() => {
  // Dodanie płynnego scrollowania do wszystkich linków
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//poniżej nie ma jquery
window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let my_navbar = document.getElementById('my-navbar');

  if(scroll > 0) {
    my_navbar.classList.add('my-navbar-scroll');
    console.log('Adding my-navbar-scroll class.');
  } else if (scroll == 0) {
    my_navbar.classList.remove('my-navbar-scroll');
    console.log('Removing my-navbar-scroll class.');
  }
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('sw.js');
      console.log('serviceWorker registered');
    } catch (err) {
      console.log(`serviceWorker isn't registered => ` + err);
    }
  }
});