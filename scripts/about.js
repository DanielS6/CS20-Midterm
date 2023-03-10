$(document).ready(function() {
    $("about").hover(function() {
        var imgNum = Math.floor((Math.random()*8) + 2); 
        $(".about").css("background-image", "url(./cat0)");
    })
});