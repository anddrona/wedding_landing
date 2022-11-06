$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
    });
    $("#tabs").tabs();
    $( "#accordion" ).accordion();


    $('.magnific').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },

    });


})