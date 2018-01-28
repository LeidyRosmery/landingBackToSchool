//
// $(".slider-drag1").slick({
//   dots: true,
//   adaptiveHeight: false,
//   centerPadding: "10px",
//   mobileFirst: true,
//   infinite: true,
//    // slidesToShow: 1,
//     speed: 100,
//   slidesToScroll: 1,
//   arrows: false,
//
//   centerMode: false,
//
//   responsive: [{
//     breakpoint: 992,
//     settings: {
//       slidesToShow: 1,
//       // autoplay:true,
//        autoplaySpeed: 5000,
//       arrows: false
//
//     }
//   }]
// });
//
// $(".slider-drag2").slick({
//   dots: true,
//   adaptiveHeight: false,
//   centerPadding: "10px",
//   mobileFirst: true,
//   infinite: true,
//    // slidesToShow: 2,
//     speed: 100,
//   slidesToScroll: 1,
//   arrows: false,
//  variableWidth: true,
//   centerMode: false,
//
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       // slidesToShow: 1,
//       swipe:false,
//       arrows: false,
//       infinite:false
//
//     }
//   }]
// });
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
    cssEase: 'linear',
  swipe:true,
  asNavFor: '.slider-nav',
  // autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});


var configSlick = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  vertical: false,
  infinite: false,
  prevArrow: $('.bPrev'),
  nextArrow: $('.bNext'),
  responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};



var events = {
  init: function() {
    // this.changeHomeSlider();
    this.initHomeSlider();
    this.initFooterSlider();

  },

  initHomeSlider: function() {
    if ($('.slider-drag1').length) {
      $('.slider-drag1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        vertical: false,
        infinite: true,
        responsive: [{
            breakpoint: 700,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true
            }
          }
        ]
        // prevArrow: $('.sPrev'),
        // nextArrow: $('.sNext')
      });
    }
  },
  initFooterSlider: function() {
    if ($('.slider-drag2').length) {
      $('.slider-drag2').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        swipe: true,
        // autoplay: true,
        autoplaySpeed: 500,
        responsive: [{
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
              swipe: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
              arrows: false,
              dots: true,
              swipe: true
            }
          }
        ]
      });
    }
  }
};
events.init();
