/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('.phone').keydown(function(event) {
    var key = event.charCode || event.keyCode || 0;
    var $text = $(this);
    if (key !== 8 && key !== 9) {
        if ($text.val().length === 3) {
            $text.val($text.val() + '-');
        }
        if ($text.val().length === 8) {
            $text.val($text.val() + '-');
        }
    }
 
    return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));          
  });

  $('#RSVP_send').click(function(e){
    e.preventDefault();
    $('#RSVP_form').submit();
  });

  $('#RSVP_form').submit(function(e){
    e.preventDefault();
    var url="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeXRcUiGtS9EwZ4tYDfVw7DDwzY0okhKBbbNGllT5uJWsvmaA/formResponse";
    if($('.name').val()=='' || $('.phone').val() ==''){
      alert('빈칸이 존재합니다.');
      return false;
    }
    $.ajax({
      url:url,
      data:$('#RSVP_form').serialize(),
      type:'POST',
      statusCode:{
        0: function(data){
          alert('참여해주셔서 감사합니다.');
          $('.name').val('');
          $('.phone').val('');
          $('.attend option:eq(0)').prop('selected',true);
          $('.plus option:eq(0)').prop('selected',true);
        },
        200: function(data){
          alert('참여해주셔서 감사합니다.');
          $('.name').val('');
          $('.phone').val('');
          $('.attend option:eq(0)').prop('selected',true);
          $('.plus option:eq(0)').prop('selected',true);
        },
        403: function(data){
          alert('전송이 실패하였습니다.');
        }
      }
    });
  });
})(jQuery); // End of use strict
