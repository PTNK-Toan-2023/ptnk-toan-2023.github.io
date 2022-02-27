$(function () {
    var $cloneObj;
  $(".section-desc, .section-img").click(function () {
        $(".cover").css({'visibility': 'visible'});
        coverToggle();

        $cloneObj = $(this).clone();
        $cloneObj.prependTo("html");
        $cloneObj.click(function() {
            coverToggle();
            $cloneObj.animate({
                opacity: 0,
            },'0.5s', function(){$cloneObj.remove()});
        })
        
        $cloneObj.toggleClass("zoom");
        $cloneObj.css({
            'position': 'fixed',

            'max-height': '80vh',
            'max-width': '80vw',

            'width': 'fit-content',
            'height': 'fit-content',

            'opacity': '0',

            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%,-50%)'
        });

        if ($cloneObj.hasClass("section-img")){
            $cloneObj.css({
                'max-height': 'none',
                'max-width': 'none',
                'overflow': 'hidden'
            });
            $cloneObj.find('img').css({
                'max-height': '75vh',
                'max-width': '75vw'
            });
        };

        if ($cloneObj.prop('scrollHeight') > $cloneObj.outerHeight(true) ){
            $cloneObj.css({'overflow-y': 'scroll'});
        };
        
        $cloneObj.animate({
            opacity: 1,
        }, "0.5s");
    });
});
function coverToggle(){
    var op = 0.8 - $(".cover").css('opacity');

    var visiToggle = $(".cover").css('visibility');
    if (visiToggle == "visible"){
        visiToggle = "hidden";
    }
    else{
        visiToggle = "visible";
    }

    $(".cover").css({
        'visibility': visiToggle,
        'opacity': op,
    });
}