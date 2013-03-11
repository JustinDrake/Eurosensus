$(function () {
    $dummy = $('#featured-dummy');

    // Featured initiative animation
    $('#carousel img[target]').on('click', function () {
        $target = $('#' + $(this).attr('target'));

        $dummy
            .stop(true, true)
            .animate({
                'margin-top': '+=' + ($dummy.position().top - $target.position().top) + 'px'
            });
    });

    // Bring user to the detailed information page
    $('.featured-title').on('click', function () {
        window.location.href += 'initiative.html';
    });

    var $ecocide = $('.featured').first();
    $daysLeft = $ecocide.find('.days-left');
    var $totalVotes = $ecocide.find('.total-votes');

    function formatNumber(number) {
        var result = '';

        while(number > 0) {
            result = (number % 1000) + (result === '' ? '' : ',&thinsp;') + result;
            number = (number - (number % 1000)) / 1000;
        }

        return result;
    }

    $.post('/ecocide', function (data) {
        // Update text
        $daysLeft.find('b').html(data.daysLeft);
        $totalVotes.find('b').html(formatNumber(data.totalVotes));

        // Update progress bars
        $daysLeft.find('.bar').css('width', (data.daysLeft / 3.56) + '%');
        $totalVotes.find('.bar').css('width', (data.totalVotes / 10000) + '%');
    });

    $('#featured-container').on('click', '.featured-website', function () {
        window.open('http://' + $(this).text(), '_blank');
    });
});
