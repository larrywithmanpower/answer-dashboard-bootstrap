
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
    }
  });
}


// modal
let name;
let email;

$('.js-modal').click(function() {
  name = $(this).data('name');
  email = $(this).data('email');
  console.log(name, email);
  $('.js-accountName').attr('value', name);
  $('.js-accountEmail').attr('value', email);
})


