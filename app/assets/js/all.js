$(document).ready(function () {

  // layout sideMenu 
  let loc = window.location.pathname.substring(1);
  console.log(loc);

  $('.menu__item').find('.link').each(function () {
    console.log($(this).attr('href'));
    if ($(this).attr('href') === loc) {
      $(this).parent().toggleClass('active');
    }
  });


  // edit area
  $('.js-editBtn').click(function (e) {
    e.preventDefault();
    console.log('got you');
    $('.js-msgArea').addClass('d-none');
    $('.js-footerArea').addClass('d-none');
    $('.js-editArea').removeClass('d-none').addClass('d-block');
  })

  // modal
  let name;
  let email;

  $('.js-modal').click(function () {
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

})



