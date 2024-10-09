$(document).ready(function(){

$(window).scroll(function(){
    if(this.scroll > 20){
        $('.navbar') .addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }

//scroll-up button show/hide script
if(this.scroll > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show")
}
});

//slide-up script
$('show-up-btn').click(function(){
    $('html').animate({scrolltop: 0});
})

// removing smooth scroll on slide-up button click
$('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
 
 // toggle menu/navbar script
 $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing-1", {
    strings: ["Web Developer", "Digital Marketing", "Training", "Freelancer",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Digital Marketing", "Training", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    } 
    });
