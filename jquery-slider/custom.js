$(document).ready(function() {

    $(".slider li:first").show();

    index = 0;
    slide_count = $(".navigation li").length -1;
    
    //Navigation Butonların Uretilmesi

    navigation_button_count = $(".slider li").length;

    for(i=1; i<=navigation_button_count; i++) {
        
        $(".navigation").append("<li><a href='#'>"+ i + "</a></li>");
        
    }

    $(".navigation li:first").find("a").addClass("active");

    // *************************************************************

    $(".navigation li").click(function() {

        var index = $(this).index();

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);

        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    })
    

    /*
    $(".navigation li").mouseover(function() {

        var index = $(this).index();

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);

        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");

    })
    */

    
    /*
    $(".navigation li").hover(function() {
        var index = $(this).index();

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);

        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    });
    */

    $("#prev").click(function() {
       

        if(index == 0) {
            index = slide_count;
        } else{
            index --;
            //index = index - 1;
        }

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);

        $(".navigation li a").removeClass("active");
        $(".navigation li:eq(" + index +")").find("a").addClass("active");


    })

    $("#next").click(function() {

        
        if(index == slide_count) {
            index = 0;
        } else{
            index ++;
            //index = index - 1;
        }

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);

        $(".navigation li a").removeClass("active");
        $(".navigation li:eq(" + index +")").find("a").addClass("active");


    })
})