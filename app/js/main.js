$(function() {
   $('.slider-blog__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/portfolio/arrow-left.svg"></button>' , 
      nextArrow: '<button type="button" class="slick-next"><img src="images/portfolio/arrow-right.svg"></button>'
   });

   

    $('.menu-btn').on('click', function(){
       $('.menu__list').toggleClass('menu__list--active');
    });

   var mixer = mixitup('.portfolio__content');

});
