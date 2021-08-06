
// layout sideMenu 
let loc = (window.location.pathname).substring(1);

$('.menu__item').find('.link').each(function () {
  if($(this).attr('href') == loc) {
    $(this).parent().addClass('active');
  }
});
