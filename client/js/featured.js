$(function () {
    var $dummy = $('#featured-dummy');

    // Featured initiative animation
    $('#carousel .carousel-image').on('click', function () {
        // Remove the active class for all carousel images
        $('#carousel').find('img').removeClass('active');

        var $image = $(this)
            .find('img')
            .addClass('active');

        var $target = $('#' + $image.attr('target'));

        $dummy
            .stop(true, true)
            .animate({
                'margin-top': '+=' + ($dummy.position().top - $target.position().top) + 'px'
            });
    });

    // Add active class to first image
    $('#carousel').find('img').first().addClass('active');

    // Bring user to the detailed information page
    $('.featured-title').on('click', function () {
        window.location.href += 'initiative.html';
    });

    var $ecocide = $('.featured').first();
    var $daysLeft = $ecocide.find('.days-left');
    var $totalVotes = $ecocide.find('.total-votes');

    function formatNumber(number) {
        var result = '';

        while(number > 0) {
            result = (number % 1000) + (result === '' ? '' : ',&thinsp;') + result;
            number = (number - (number % 1000)) / 1000;
        }

        return result;
    }

    // $.post('/ecocide', function (data) {
    //     // Update text
    //     $daysLeft.find('b').html(data.daysLeft);
    //     $totalVotes.find('b').html(formatNumber(data.totalVotes));

    //     // Update progress bars
    //     $daysLeft.find('.bar').css('width', (data.daysLeft / 3.56) + '%');
    //     $totalVotes.find('.bar').css('width', (data.totalVotes / 10000) + '%');
    // });

    $('#featured-container').on('click', '.featured-website', function () {
        window.open('http://' + $(this).text(), '_blank');
    });

    $('html').keydown(function (e) {
        var keyCode = e.keyCode || e.which;
        var arrow = {
            left: 37,
            right: 39
        };

        if(keyCode === arrow.left) {
            $('#carousel-move-left').click();
        }

        if(keyCode === arrow.right) {
            $('#carousel-move-right').click();
        }
    });
});
