$(document).ready(function() {
    $(".bro").mouseenter(function() {
        $(this).fadeTo("fast", 0.5);
    });
    $(".bro").mouseleave(function() {
        $(this).fadeTo("fast", 1);
    });
});
