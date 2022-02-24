$(function() {
   $(".menu a").on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор блока с атрибута href
      var id = $(this).attr('href'),

         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $('.slider-blog__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/portfolio/arrow-left.svg"></button>' , 
      nextArrow: '<button type="button" class="slick-next"><img src="images/portfolio/arrow-right.svg"></button>',
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false
            }
         },
      ]
   });


    $('.menu-btn, .menu a').on('click', function(){
       $('.menu__list').toggleClass('menu__list--active');
    });


    
   var mixer = mixitup('.portfolio__content');

});
