$(function (){

  $("menu").on("click", 'a',function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
var mixer = mixitup('.portfolio__content');

$('.slider-blog__inner').slick({
  infinite: true,
  dots: true,
  arrows: false,
});

Fancybox.bind("[data-fancybox]", {
});

$('.menu-btn ,.menu a').on('click' , function() {
  $('.menu__list').toggleClass('menu__list--active');
  
});


});

