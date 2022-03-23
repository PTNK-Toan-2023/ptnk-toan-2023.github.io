$(function () {
    $(this).scrollTop(0);

    $("#section1").removeClass("scroll-fade-hide");

    $(window).scroll(function () {
        $("hr").each(function () {
            scrollPos = $(window).scrollTop() + $(window).innerHeight();
            thisPos = $(this).offset().top + $(this).height();
            offset = $(window).innerHeight() / 5;
            if (scrollPos > thisPos + offset) {
                $(this).removeClass("hr-hide");
            }
        });

        $(".content-section").each(function () {
            scrollPos = $(window).scrollTop() + $(window).innerHeight();
            thisPos = $(this).offset().top;
            offset = $(window).innerHeight() / 2;
            console.log(scrollPos, thisPos);
            if (scrollPos > thisPos + offset) {
                $(this).removeClass("scroll-fade-hide");
            }
        });
    });
});