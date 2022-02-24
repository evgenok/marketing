$(function() {
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

   

    $('.menu-btn').on('click', function(){
       $('.menu__list').toggleClass('menu__list--active');
    });

   var mixer = mixitup('.portfolio__content');

});
