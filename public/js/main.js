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

if ($('#TableOfContents ul').length == 0) {
  $('#toc-wrapper').hide();
}

$('#mode-toggle').click(function () {
  var currentMode = $('html').attr('data-mode') || 'light';
  var newMode = currentMode === 'dark' ? 'light' : 'dark';

  $('html').attr('data-mode', newMode);
  localStorage.setItem('theme-mode', newMode);
});

// 页面加载时恢复主题
$(document).ready(function () {
  var savedMode = localStorage.getItem('theme-mode') || 'light';
  $('html').attr('data-mode', savedMode);
});

$(function () {
  $('.zoomify').zoomify();
});