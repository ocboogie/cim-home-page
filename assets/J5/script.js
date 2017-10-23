$(document).ready(function () {

    $("td:first-child").css("background-color", "#dcdcdc");
    $(".feature").css({ "background-color": "#eeeee", "font-size": "125%", "padding-top": "1em" });

    // blindEffect {
    $("#blindEffect").click(function () {
        $("#effect").toggle("blind");
        //note for others we just change the argument to toggle, toggle is a core effect method
    });
    // }

    // bounceEffect {
    $("#bounceEffect").click(function () {
        $("#effect").toggle("bounce", { times: 10, easing: 'easeOutBounce' }, "slow");
        //note for others we just change the argument to toggle, toggle is a core effect method
    });
    // }

    // clipEffect {
    $("#clipEffect").click(function () {
        $("#effect").toggle("clip");
    });
    // }

    // dropEffect {
    $("#dropEffect").click(function () {
        $("#effect").toggle("drop");
    });
    // }
    
    // explodeEffect {
    $("#explodeEffect").click(function () {
        $("#effect").toggle("explode");
    });
    // }



    $("#resize").click(function () {
        $("#interactions").resizable({ animateEasing: "easeOutBounce" });
        //note for others we just change the argument to toggle, toggle is a core effect method
    });

    /*
    javascript is not yet seen the autoComplete id, need to wait until document is ready
    or you can just wait to the tags are read and then load the code, this is the standard way for widgets
    */

    $("#autoComplete").autocomplete({
        source:
        ["cimw115 DW/WP", "cimw105 SQL", "cimw220 Flash", "cimw140 CSS/RWD", "cimw145 PHP", "cimw160 JavaScript"]
    });

    $("#menu").menu();
});
