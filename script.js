$(document).ready(function(){
    $('.photoshop').slick({
        dots: false,
        slidesToShow: 1,
        // slidesToScroll:1,
        centerMode: false,
        variableWidth: true,
        autoplay:true,
       Speed: 2000,
        arrows:false,

        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:4,
                },
            },
            {
                breakpoint: 520,
                settings:{
                    slidesToShow:1,
                }, 
            }
        ]
      });
})

