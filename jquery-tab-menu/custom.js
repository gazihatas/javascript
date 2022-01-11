$(document).ready(function() {
    //$(".tab-content div").hide();
    $(".tab-content div:first").show();
    /*
    $(".tab li").click(function() {
        //1. Yol index üzerinden gitme

        //tıklamış olduğum indisi al yani kaçıncı sıradaki li elemntine tıkladıms
        var indis = $(this).index();
        
        $(".tab-content div").hide();
        $(".tab-content div:eq("+ indis +")").show();

        $(".tab li").removeClass("active");
        $(".tab li:eq("+ indis + ")").addClass("active");

    })
    */


    $(".tab li").click(function(){
        //2. yol attribute üzerinden gitmek

        var tab_content = $(this).attr("rel");
        var indis = $(this).index();

        $(".tab-content div").hide();
        $(tab_content).show();

        $(".tab li").removeClass("active");
        $(".tab li:eq("+ indis + ")").addClass("active");

    })
})