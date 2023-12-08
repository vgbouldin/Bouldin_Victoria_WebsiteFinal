$(document).ready(function(){
    $("#header").click(function() {
        $('#menu').fadeIn();
    });
    $("#close-menu").click(function(){
        $("#menu").fadeOut();
    })
});
