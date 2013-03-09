$(function () {
    $('#carousel img').on('click', function () {
        $('#featured-dummy').animate({
            'margin-top': '-=359px'
        });
    });

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

    var tour = new Tour();

    tour.addStep({
        title: 'What is Eurosensus?',
        content: 'Welcome to Eurosensus, the best online platform dedicated to european initiatives.',
        element: '.brand',
        placement: 'bottom',
        animation: true
    });

    tour.addStep({
        title: 'Why Eurosensus?',
        content: 'A platform and an active community helping initiatives gather 1 million votes. We make direct democracy a reality.',
        element: '#carousel',
        placement: 'bottom',
        animation: true
    });

    tour.addStep({
        title: 'What is an ECI?',
        content: 'Since 2009, European citizens have been given the right to propose a European Citizen Initiative (ECI) on the topic of their choice that can have a direct impact on EU policies.',
        element: '.featured-title',
        placement: 'right',
        animation: true
    });

    tour.addStep({
        title: 'How to support an ECI?',
        content: 'Click on a specific ECI in order to get voting information.',
        element: 'iframe',
        placement: 'right',
        animation: true
    });

    tour.addStep({
        title: 'How to propose a draft ECI?',
        content: 'Go to our ECI laboratory and test your ideas.',
        element: '#new-draft',
        placement: 'right',
        animation: true
    });

    $('#take-tour').on('click', function () {
        tour.restart();
        tour.start();
    });
});
