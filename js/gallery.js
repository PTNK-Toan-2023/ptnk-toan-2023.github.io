/* READ MORE JS */

$(function () {
    updateReadMore()
    $(window).resize(function () {
        updateReadMore()
    });
});
function updateReadMore() {
    $(".readMore").each(function () {
        var prevText = $(this).siblings("article");
        var htmlPrevText = prevText[0];

        $(this).text(
            htmlPrevText.scrollHeight > htmlPrevText.clientHeight
                ? "Read more" : ""
        );
    });
}

/* SCROLL EFFECT JS */
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

/* ZOOM JS */

$(function () {
    var cover = $(".cover");
    var cloneObj;

    $(".section-desc, .section-img").click(function () {
        coverToggle();

        cloneObj = $(this).clone();
        cloneObj.prependTo("body");

        cloneObj.addClass("zoom");
        if (cloneObj.hasClass("section-img")) {
            cloneObj.find('img').css({
                'max-height': '75vh',
                'max-width': '75vw'
            });
        };
        cloneObj.find(".section-desc-content").css({ 'overflow-y': 'auto' });

        cloneObj.animate({
            opacity: 1,
        }, "0.5s");

        cloneObj.find(".readMore").remove();

        cover.add(cloneObj).click(function () {
            coverToggle();
            cloneObj.animate({
                opacity: 0,
            }, '0.5s', function () { cloneObj.remove() });
        })
    });
    function coverToggle() {
        var op = (cover.css('opacity') == 0.8) ? 0.0 : 0.8;
        var visiToggle = (cover.css('visibility') == "visible") ? "hidden" : "visible";

        cover.css({
            'visibility': visiToggle,
            'opacity': op,
        });

    };
});