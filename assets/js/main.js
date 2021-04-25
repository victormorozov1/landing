$(document).ready(function(){
    function set_info(id, cost, people, mark){
        $(statistics_node).children("#cost").children("p").text(cost + " млн. $");
        $(statistics_node).children("#people").children("p").text(people + " тыс.");
        $(statistics_node).children("#mark").children("p").text(mark + " отзывы");
        $("#" + id).append(statistics_node.clone());
    }

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);
    let statistics_node = $('.statistics').clone();

    set_info("iceberg", "280", "12", "4.8")
    set_info("adler", "328", "8", "4.7")
    set_info("puck", "35", "7", "4.8")
    set_info("grand-ice-palace", "300", "12", "4.8")
    set_info("curling-center", "30", "3", "4.7")

    $(".menu-icon").click(function (){
        $(this).css("display", "none");
        var nav = $("nav");

        nav.css("display", "inline-block");
        nav.children().css("display", "block");

        $("#main-section>h1").css("display", "none");
    });

    $("nav").click(function(){
        if ($("#logo").css("display") === "none"){
            $(this).css("display", "none");
            $(".menu-icon").css("display", "block");
            $("#main-section>h1").css("display", "block");
        }
    });


});