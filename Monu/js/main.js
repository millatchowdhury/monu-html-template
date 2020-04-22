$(document).ready(function(){

    //  main slider slick 
        $('.main-slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        dots: false
      });
    //   slick slider end
    // slick testimonial start
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        dots: true
      });
    //   slick testimonial slider end
   
   
    // slick brand start
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1
           }
         },
         {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
      });
    //   slick brand end

    // counterup jquery Plugin start
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    // counterup jquery Plugin end
   //  responsive menu start
    $('#mobile-menu').meanmenu({
       meanScreenWidth: '991',
       meanMenuContainer: '.mobile-menu'
    });
   // responsive menu end
});
