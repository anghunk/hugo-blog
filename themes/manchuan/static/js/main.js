function goTop() {
  $('#back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: 0
      },
      500
    );
  });
}
goTop();

function NavMenu() {
  $('header nav a').each(function () {
    const url = window.location.pathname;
    if ($(this).attr('href') == url) {
      $(this).addClass('active');
    }
  })
}
NavMenu();

if ($('#TableOfContents ul').length == 0) {
  $('#toc-wrapper').hide();
}

$(function () {
  $('.zoomify').zoomify();
});