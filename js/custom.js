(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  //navigation
  $('.navigation').onePageNav({
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Smooth scroll for the get started button
  $('.btn-get-started').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top 
        }, 700);
      }
  });


  // Fixed navbar
  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0) {

      $('.navbar-default').removeClass('fixed-to-top');
    }
  });

  //parallax
  
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function () {

    var browserWidth = $(window).width();


  });


  $(window).resize(function () {

    var browserWidth = $(window).width();


  });


})(jQuery);
