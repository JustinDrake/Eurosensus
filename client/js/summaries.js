$(function () {
    $('.right-animation').on('click', function () {
        $(this)
            .closest('.span4')
            .find('.fixed')
            .animate({
                'margin-left': '+=300'
            });
    });

    $('.left-animation').on('click', function () {
        $(this)
            .closest('.span4')
            .find('.fixed')
            .animate({
                'margin-left': '-=300'
            });
    });
});
