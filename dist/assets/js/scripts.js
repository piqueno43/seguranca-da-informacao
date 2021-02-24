(function($){
  var $buttonSearch = $('#button-search');

  $buttonSearch.on('focus click', function() {
    var $self = $(this);
    var $input = $self.closest('.menu-form').find('.form-control');
    var $inputGroup = $self.closest('.menu-form').find('.has-group');

    if($input.hasClass('input-active')){
      $input.removeClass('input-active');
      $inputGroup.removeClass('input-group-append');
    } else {
      $input.addClass('input-active');
      $inputGroup.addClass('input-group-append');
    }

    $input.on('focusout', function(){
      $input.removeClass('input-active');
      $inputGroup.removeClass('input-group-append');
    });
  });

  // Collapse
  var $navbarHeader = $('#navbarHeader');

  $('.open-menu-Header').on('click', function(){
    $navbarHeader.collapse('toggle');
  });

  $navbarHeader.on('show.bs.collapse', function () {
    $('.menu-form').find('.btn-form').hide('slow');
  });
  $navbarHeader.on('hidden.bs.collapse', function () {
    $('.menu-form').find('.btn-form').show('fast');
  });

  var $navbarFooter = $('#navbarFooter');

  $('.open-menu-Footer').on('click', function(){
    $navbarFooter.collapse('toggle');
  });

  // initialize olw carousel
  $('.owlCarousel, .owlCarouselFooter')
  .addClass('owl-carousel owl-theme')
  .owlCarousel({
    margin:60,
    responsive:{
        0:{
            items:1
        },
        720: {
          items: 2
        },
        960:{
            items:3
        },
        1140:{
            items:3
        }
    }
  })
  // initialize olw carousel highlights-carousel
  $('.highlights-carousel')
  .addClass('owl-carousel owl-theme')
  .owlCarousel({
    margin:60,
    items:1
  })


})(jQuery)

$(function () {
  // Enable tooltip
  $('.has-tooltip').tooltip()
})
