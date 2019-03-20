$(document).ready(() => {
  // Dodanie płynnego scrollowania do wszystkich linków
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(window).scroll(event => {
  var scroll = $(window).scrollTop();

  if(scroll > 0)
    $('.my-navbar').addClass("my-navbar-scroll");
  else if (scroll == 0)
    $('.my-navbar').removeClass("my-navbar-scroll");
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