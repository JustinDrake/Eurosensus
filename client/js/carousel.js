$(function () {
    var $images = $('#carousel-images');
    var $dummy = $('#carousel-dummy');
    var $moveLeft = $('#carousel-move-left');
    var $moveRight = $('#carousel-move-right');

    var displayedImages = 5;

    var leftOffset = 0;
    var rightOffset = $images.children().length - displayedImages - 1;
    var imageWidth = $images.find('.image-class').first().css('width');

    $moveLeft.on('click', function () {
        $dummy
            .stop(true, true);

        if(rightOffset === 0) {
            $dummy.css('margin-left', '+=' + imageWidth);

            $images
                .find('.image-class')
                .first()
                .detach()
                .appendTo($images);
        } else {
            leftOffset += 1;
            rightOffset -= 1;
        }

        $dummy
            .animate({
                'margin-left': '-=' + imageWidth
            });
    });

    $moveRight.on('click', function () {
        $dummy
            .stop(true, true);

        if(leftOffset === 0) {
            $dummy.css('margin-left', '-=' + imageWidth);

            $images
                .find('.image-class')
                .last()
                .detach()
                .insertAfter($dummy);
        } else {
            leftOffset -= 1;
            rightOffset += 1;
        }

        $dummy
            .animate({
                'margin-left': '+=' + imageWidth
            });
    });
});
