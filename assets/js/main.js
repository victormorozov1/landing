$(document).ready(function(){
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);

    $(".menu-icon").click(function (){
        $(this).css("display", "none");
        var nav = $("nav");

        nav.css("display", "inline-block");
        nav.children().css("display", "block");
    });

    $("nav").click(function(){
        if ($("#logo").css("display") === "none"){
            $(this).css("display", "none");
            $(".menu-icon").css("display", "block");
        }
    });
});