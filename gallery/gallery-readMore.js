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