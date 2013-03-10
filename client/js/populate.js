$(function () {
    var $container = $('#featured-container');

    var data = {
        ECIs: [{
            id: 'ecocide',
            name: 'Ecocide',
            site: 'www.endecocide.eu',
            caption: 'Ecocide is the extensive damage to, destruction of or loss of ecosystems of a given territory. Let\'s end Ecocide in Europe together!',
            youtube: 'j1uTDE5tayQ',
            image: 'ecocide.jpg'
        },
        {
            id: 'let-me-vote',
            name: 'Let me vote',
            site: 'www.letmevote.eu',
            caption: 'This initiative aims to reduce the democratic deficit in Europe. Let\'s give each European residing in another European country the right to vote.',
            youtube: '',
            image: 'letMeVote.png'
        },
        {
            id: 'one-single-tariff',
            name: 'One single tariff',
            site: 'www.onesingletariff.com',
            caption: 'We would like to eliminate as soon as possible roaming charges across the European Union and complete the common mobile phone market.',
            youtube: '',
            image: 'oneSingleTariff.png'
        },
        {
            id: 'icecream-for-europe',
            name: 'Icecream for Europe',
            site: 'www.icecream.eu',
            caption: 'Every European child has a right to a weekly icecream. Help us reach a million signatures for this delicious cause.',
            youtube: '_f7-Eq4H0D8',
            image: ''
        }]
    };

    var template = $('#template').text();

    $container.html(Mustache.to_html(template, data));
});
