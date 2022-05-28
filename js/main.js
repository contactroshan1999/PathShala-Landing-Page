$(window).on("load",function()
{
    
    $(".preloader").fadeOut("slow");
});
$(document).ready(function(){
    /*--------Navbar Shrink-----------------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() >90 ){
            $(".navbar").addClass("navbar-shrink");
        }
        else
        {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*---------Video Popup------------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
            $("#player-1").attr("src",videoSrc);
            
        }
      }

    });

/*-------Owl Carousel Feautures-------*/
$('.features-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

/*-------App Screen Shot-------*/
$('.screenshots-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});
/*-------Testimonial-------*/
$('.testimonials-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
/*---------------Page Scrolling- Scroll it----------------------------*/
$.scrollIt({
    topOffset: -50    
});
//==========================Navbar Collapse===================
$(".nav-link").on("click",function(){
$(".navbar-collapse").collapse("hide");
});
//==========================Toggle Theme dark & Light Mode====================
function toogleTheme()
{
    if(localStorage.getItem("Path-Shala") !== null)
    {
        if(localStorage.getItem("Path-Shala") === "dark")
        {
            $("body").addClass("dark");
        }
        else
        {
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toogleTheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark"))
    {
        localStorage.setItem("Path-Shala","dark");
    }
    else
    {
        localStorage.setItem("Path-Shala","light");
    }
    updateIcon();
});
function updateIcon()
{
    if($("body").hasClass("dark"))
    {
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    }
    else
    {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}
});