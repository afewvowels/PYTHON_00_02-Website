$('#image-carousel').click(function(){
  advanceCarousel();
});

function advanceCarousel() {
  if ($('#carousel-image-design').hasClass('visible')) {
    $('#carousel-image-work').removeClass('transition');
    $('#carousel-image-design').addClass('transition');
    $('#carousel-image-design').removeClass('visible').delay(1000);
    $('#carousel-image-develop').addClass('visible');
  } else if ($('#carousel-image-develop').hasClass('visible')) {
    $('#carousel-image-design').removeClass('transition');
    $('#carousel-image-develop').addClass('transition');
    $('#carousel-image-develop').removeClass('visible');
    $('#carousel-image-work').addClass('visible');
  } else if ($('#carousel-image-work').hasClass('visible')){
  $('#carousel-image-develop').removeClass('transition');
    $('#carousel-image-work').addClass('transition');
    $('#carousel-image-work').removeClass('visible');
    $('#carousel-image-design').addClass('visible');
  }
};
