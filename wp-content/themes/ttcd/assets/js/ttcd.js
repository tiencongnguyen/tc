/**
 * Scripts within ttcd theme
 *
 */

(function() {
	$('.slider-lv').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  });
  $('.slider-talk-about-us').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  $(window).scroll(function() {
    if( $(this).scrollTop() > $('#header').height() + 30 ) {
      $('body').css({'padding-top' : $('#header').height()+30}).addClass('header-fixed');
      $('#header').css({
        'margin-top' : -$('#top-header').height()-30 - $('#content-header').height()
      });
    }
    if( $(this).scrollTop() == 0 ){
      $('body').removeClass('header-fixed').css({'padding-top' : 0});
      $('#header').css({
        'margin-top' : 0
      });
    }
  })
})( jQuery );
