var $ecocide = $('#ecocide');
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

$.post('/ecocide', function (data) {
    // Update text
    $daysLeft.find('b').html(data.daysLeft);
    $totalVotes.find('b').html(formatNumber(data.totalVotes));

    // Update progress bars
    $daysLeft.find('.bar').css('width', (data.daysLeft / 3.56) + '%');
    $totalVotes.find('.bar').css('width', (data.totalVotes / 10000) + '%');
});

$.post('/username', function (data) {
    console.log('username', data);

    if(data) {
        $('#login').text('Welcome, ' + data);
    }
});