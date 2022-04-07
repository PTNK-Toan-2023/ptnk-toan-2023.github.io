$(function () {
    $(this).scrollTop(0);

    $(window).scroll(function () {
        $("hr").each(function () {
            scrollPos = $(window).scrollTop() + $(window).innerHeight();
            thisPos = $(this).offset().top + $(this).height();
            offset = $(window).innerHeight() / 5;
            if (scrollPos > thisPos + offset) {
                $(this).removeClass("hr-hide");
                $(this).next(".section").removeClass("scroll-fade-hide");
            }
        });
    });
});