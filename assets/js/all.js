"use strict";

// layout sideMenu 
var loc = window.location.pathname.substring(1);
$('.menu__item').find('.link').each(function () {
  if ($(this).attr('href') === loc) {
    $(this).parent().addClass('active');
  }
}); // edit area

$('.js-editBtn').click(function (e) {
  e.preventDefault();
  console.log('got you');
  $('.js-msgArea').addClass('d-none');
  $('.js-footerArea').addClass('d-none');
  $('.js-editArea').removeClass('d-none').addClass('d-block');
}); // modal

var name;
var email;
$('.js-modal').click(function () {
  name = $(this).data('name');
  email = $(this).data('email');
  console.log(name, email);
  $('.js-accountName').attr('value', name);
  $('.js-accountEmail').attr('value', email);
}); // infor modal

var infoItem;
var infoName;
var infoEmail;
$('.js-checkModal').click(function () {
  infoItem = $(this).data('item');
  infoName = $(this).data('name');
  infoEmail = $(this).data('email');
  $('.js-checkModalItem').text(infoItem);
  $('.js-checkModalName').text(infoName);
  $('.js-checkModalEmail').text(infoEmail);
}); // toggle rotate

$(".js-rotate").click(function () {
  console.log($(this).find('i'));
  $(this).toggleClass("down");
});
//# sourceMappingURL=all.js.map
