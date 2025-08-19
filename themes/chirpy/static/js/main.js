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

function NavMenu() {
  $('.nav-item').each(function () {
    const url = window.location.pathname;
    if ($(this).find('a').attr('href') == url) {
      $(this).addClass('active');
    }
  })
}
NavMenu();

function MobNav() {
  $('#sidebar-trigger').click(function () {
    $('body').attr('sidebar-display', '')
  })

  $('main').click(function () {
    $('body').removeAttr('sidebar-display')
  })
}
MobNav();