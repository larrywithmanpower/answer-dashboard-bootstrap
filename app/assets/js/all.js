
// layout sideMenu 
let loc = $(location).attr('pathname').substring(1);
// console.log($(location).attr('pathname'));

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
});


// infor modal
let infoItem;
let infoName;
let infoEmail;

$('.js-checkModal').click(function () {
  infoItem = $(this).data('item');
  infoName = $(this).data('name');
  infoEmail = $(this).data('email');
  $('.js-checkModalItem').text(infoItem);
  $('.js-checkModalName').text(infoName);
  $('.js-checkModalEmail').text(infoEmail);
});


// toggle rotate
$(".js-rotate").click(function () {
  console.log($(this).find('i'));
  $(this).toggleClass("down");
})
