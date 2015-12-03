$(window).load(function(){
  /**
   * Portfolios
   */
  var $portfolios_container = $('.portfolios');
  var $portfolios_list = $portfolios_container.find('.portfolios-list');

  $portfolios_list.isotope({
    itemSelector: '.portfolios-item'
  });

  $('.portfolios-control').on('click', 'a', function(){
    var filterValue = $(this).attr('data-filter');

    $portfolios_container.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');

    $portfolios_list.isotope({ filter: filterValue });
  });

  lightbox.option({
    wrapAround: true,
    fitImagesInViewport: false
  });
});

$(document).ready(function(){
  // Web font
  $youziku.load(".page-header", "5edc2fbb907642fda3c21ff97750345d", "PMingLiU");
  $youziku.load(".site-main", "5edc2fbb907642fda3c21ff97750345d", "PMingLiU");
  $youziku.draw();
});
