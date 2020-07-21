$(document).ready(function() {
    $(".nav-menu a").each(function() {
        $(this).removeClass("current");
        if ($(this).prop("href") == window.location.href) {
            $(this).addClass("current");
        }
    });
});