
/*
$(document).ready(function(){
    $('.testimonials-list').slick({
        dots: false,
        autoplay: false,
        prevArrow: '<span class="fa-stack testimonial-left-handle fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-caret-left fa-stack-1x"></i></span>',
        nextArrow: '<span class="fa-stack testimonial-right-handle fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-caret-right fa-stack-1x"></i></span>',
    });
});
*/

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar-default").addClass("activescroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar-default").removeClass("activescroll");
        }
    });
});