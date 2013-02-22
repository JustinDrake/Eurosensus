$(function () {
    $('#vote')
        .on('click', function () {
            console.log('click!');

            $('.modal').modal('show');
        });

        $('.modal').modal('show');
});
