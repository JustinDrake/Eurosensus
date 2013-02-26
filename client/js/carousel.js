$(function () {
    var $images = $('#carousel-images');
    var $dummy = $('#carousel-dummy');
    var $moveLeft = $('#carousel-move-left');
    var $moveRight = $('#carousel-move-right');

    var leftOffset = 0;
    var rightOffset = $images.children().length - 5 - 1;

    $moveLeft.on('click', function () {
        $dummy
            .stop(true, true);

        if(rightOffset === 0) {
            $dummy.css('margin-left', '+=188px');

            $images
                .children('img')
                .first()
                .detach()
                .appendTo($images);
        } else {
            leftOffset += 1;
            rightOffset -= 1;
        }

        $dummy
            .animate({
                'margin-left': '-=188px'
            });
    });

    $moveRight.on('click', function () {
        $dummy
            .stop(true, true);

        if(leftOffset === 0) {
            $dummy.css('margin-left', '-=188px');

            $images
                .children('img')
                .last()
                .detach()
                .insertAfter($dummy);
        } else {
            leftOffset -= 1;
            rightOffset += 1;
        }

        $dummy
            .animate({
                'margin-left': '+=188px'
            });
    });
});
