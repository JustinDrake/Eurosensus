$(function () {
    var $images = $('#carousel-images');
    var $dummy = $('#carousel-dummy');
    var $moveLeft = $('#carousel-move-left');
    var $moveRight = $('#carousel-move-right');

    var displayedImages = 5;

    var leftOffset = 0;
    var rightOffset = $images.children().length - displayedImages - 1;
    var imageWidth = $images.find('.carousel-image').first().css('width');

    $('#carousel img').load(function () {
        var $image = $(this);

        $image.css('margin-top', (119 - $image.height()) / 2);
    });

    $moveRight.on('click', function () {
        $dummy
            .stop(true, true);

        if(rightOffset === 0) {
            $dummy.css('margin-left', '+=' + imageWidth);

            $images
                .find('.carousel-image')
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
            }, 'fast');
    });

    $moveLeft.on('click', function () {
        $dummy
            .stop(true, true);

        if(leftOffset === 0) {
            $dummy.css('margin-left', '-=' + imageWidth);

            $images
                .find('.carousel-image')
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
            }, 'fast');
    });

    $('.carousel-image').on('mouseenter', function () {
        $(this).find('.carousel-caption').stop(true, true).slideDown();

        // $(this).find('img').css('-webkit-filter', 'grayscale(0%)');
    });

    $('.carousel-image').on('mouseleave', function () {
        $(this).find('.carousel-caption').stop(true, true).slideUp();

        // $(this).find('img').css('-webkit-filter', 'grayscale(100%)');
    });
});
