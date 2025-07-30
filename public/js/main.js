function goTop() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('.gotop').addClass('act');
    } else {
      $('.gotop').removeClass('act');
    }
  });

  $('.gotop').click(function () {
    $('html,body').animate({
        scrollTop: 0
      },
      500
    );
  });
}
goTop();