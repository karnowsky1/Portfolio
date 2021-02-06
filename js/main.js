jQuery(function($) {
  $(window).on("load", function() {
    // POS_LOAD scripts. Can use $
  });

  let $btns = $('.project-area .button-group button');
  $btns.on('click', function(e) {
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger('click');

  // sticky navigation menu

  const nav_oofset_top = $('.header_area').height() + 50;

  const navbarFixed = () => {
    console.log('are we getting here');
    if($('.header_area').length) {
      console.log('inside the first if');
      $(window).on("scroll", function() {
        let scroll = $(window).scrollTop();
        if(scroll >= nav_oofset_top) {
          $(".header_area .main-menu").addClass('navbar_fixed');
          console.log(scroll);
          console.log('added the class');
        } else {
          $(".header_area .main-menu").removeClass('navbar_fixed');
          console.log('added the class');

        }
      });
    }
  }
  navbarFixed();
});