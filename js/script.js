$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplaytimeout:2000,
        margin:10,
        loop:true,
        autoplayHoverPause:true,
        responsiveclass:true,
        responsive:{
            0:{
                items:2,
               
            },

            600:{
                items:3,
               
            },
            1000:{
                items:5,
                
            }
        }
    });
  });