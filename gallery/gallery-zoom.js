$(function () {
    var $cloneObj;
    $(".section-desc, .section-img").click(function () {
        coverToggle();

        $cloneObj = $(this).clone();
        $cloneObj.prependTo("body");
        $cloneObj.click(function () {
            coverToggle();
            $cloneObj.animate({
                opacity: 0,
            }, '0.5s', function () { $cloneObj.remove() });
        })

        $cloneObj.toggleClass("zoom");

        if ($cloneObj.hasClass("section-img")) {
            $cloneObj.find('img').css({
                'max-height': '75vh',
                'max-width': '75vw'
            });
        };

        if ($cloneObj.prop('scrollHeight') > $cloneObj.outerHeight(true)) {
            $cloneObj.css({ 'overflow-y': 'scroll' });
        };

        $cloneObj.animate({
            opacity: 1,
        }, "0.5s");
    });
});
function coverToggle() {
    var op = 0.8 - $(".cover").css('opacity');

    var visiToggle = ($(".cover").css('visibility') == "visible") ? "hidden" : "visible";
    $(".cover").css({
        'visibility': visiToggle,
        'opacity': op,
    });
}