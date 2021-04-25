$(document).ready(function(){
    let blur = 0;

    function set_info(id, cost, people, mark){
        $(statistics_node).children("#cost").children("p").text(cost + " млн. $");
        $(statistics_node).children("#people").children("p").text(people + " тыс.");
        $(statistics_node).children("#mark").children("p").text(mark + " отзывы");
        $("#" + id).append(statistics_node.clone());
    }

    function blur_animation(z){
        let last_time = Date.now(); // запомнить время начала
        let start = last_time;

        let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - last_time;
            last_time = Date.now();
            if (Date.now() - start >= 300) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
            }

            // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            //
            blur += z * timePassed / 500 * 10;
            if (blur > 17){
                blur = 17;
            }
            if (blur < 0)
                blur = 0;
            $(".background-image").css("filter", "blur(" + blur + "px)");
            $("#main-section>h1").css("filter", "blur(" + blur + "px)");
            $("#logo").css("filter", "blur(" + blur + "px)");
        }, 20);



// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
        function draw(timePassed) {
            train.style.left = timePassed / 5 + 'px';
        }
    }

    new WOW().init();

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

        nav.css("display", "flex");
        nav.children().css("display", "block");
        
        // $(".background-image").css("filter", "blur(5px)");
        blur_animation(1);
        $("#main-section>h1").css("display", "none");
    });

    $("nav").click(function(){
        if ($("#logo").css("display") === "none"){
            $(this).css("display", "none");
            $(".menu-icon").css("display", "block");
            $("#main-section>h1").css("display", "block");
            // $(".background-image").css("filter", "none");
            blur_animation(-5);
        }
    });

    $("nav").mouseover(function(){
        if ($("#logo").css("display") !== "none"){
            blur_animation(1);
        }
    });

    $("nav").mouseout(function(){
        if ($("#logo").css("display") !== "none"){
            blur_animation(-1);
        }
    });
});