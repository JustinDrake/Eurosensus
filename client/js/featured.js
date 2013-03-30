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

    $.post('/votes', function (data) {
        console.log(data);

        var $votes;

        for(var i in data) {
            $votes = $('#' + i).find('.featured-votes');

            // Update progress bar label
            $votes
                .find('.bar-label')
                .html(formatNumber(data[i]) + ' votes to date');

            // Update progress bar
            $votes
                .find('.bar')
                .css('background-color', '#62c462')
                .css('width', data[i] / 10000 + '%');
        }
    });

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

    $('.minifier').on('click', function () {
        $(this)
            .toggleClass('icon-chevron-up icon-chevron-down')
            .closest('.banner')
            .next('.animation-container')
            .stop()
            .animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 'fast');
    });
});
