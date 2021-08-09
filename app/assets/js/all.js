
// layout sideMenu 
let loc = (window.location.pathname).substring(1);

if (loc === 'index.html') {
  $('.menu__item').find('.link').each(function () {
    if($(this).attr('href') === loc) {
      $(this).parent().addClass('active');
    }
  });
} else if (loc === 'edit.html') {
  $('.menu__item').find('.link').each(function () {
    if($(this).attr('href') === 'index.html') {
      $(this).parent().addClass('active');
    }
  });
} else if (loc === 'admin.html') {
  $('.menu__item').find('.link').each(function () {
    if($(this).attr('href') === loc) {
      $(this).parent().addClass('active');
      // ! 下面為了在未製作完成前加上，之後要取消
      $('.menu').addClass('vh-100');
    }
  });
}

