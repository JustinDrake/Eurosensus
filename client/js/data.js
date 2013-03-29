function timeLeftDays(end) {
    return ((new Date(end)) - (new Date())) / 1000 / 60 / 60 / 24;
}

var data = {
    daysLeft: function () {
        return function () {
            return Math.floor(timeLeftDays(this.end));
        };
    },
    timeLeftPercentage: function () {
        return function () {
            return timeLeftDays(this.end) / 365 * 100;
        };
    },
    ECIs: [
        {
            id: '30kmh',
            name: '30 km/h - Making streets liveable',
            shortName: '30 km/h',
            site: '30kmh.eu',
            caption: '30 km/h limits are an inexpensive and popular way to improve safety, cut pollution and encourage smarter travel choices.',
            youtube: '',
            image: '30kmh.jpg',
            end: '2013-11-01'
        },
        {
            id: 'affordable-energy',
            name: 'Affordable energy',
            shortName: 'Affordable energy',
            site: 'affordable-energy.eu',
            caption: 'Let\'s scrap the European climate and energy package costing billions on innefective unilateral action at a time of economic crisis.',
            youtube: '',
            image: 'affordableEnergy.png',
            end: '2013-11-01'
        },
        {
            id: 'basic-income',
            name: 'Unconditional basic income',
            shortName: 'Basic income',
            site: 'basicincome2013.eu',
            caption: 'This initiative aims at exploring the feasibility of a European basic income scheme. Stand up for basic income as a human right.',
            youtube: '',
            image: 'basicIncome.jpg',
            end: '2014-01-14'
        },
        {
            id: 'ecocide',
            name: 'Ecocide',
            shortName: 'Ecocide',
            site: 'endecocide.eu',
            caption: 'Ecocide is the extensive damage to, destruction of or loss of ecosystems of a given territory. Let\'s end Ecocide in Europe together.',
            youtube: 'j1uTDE5tayQ',
            image: 'ecocide.jpg',
            end: '2014-01-21'
        },
        {
            id: 'education-trust',
            name: 'Education trust',
            shortName: 'Education trust',
            site: 'euroedtrust.eu',
            caption: 'We believe in building a Europe with equal access for all to the possibility to study and learn in a truly multi-cultural and European environment.',
            youtube: 'lzYbXdxUCnU',
            image: 'educationTrust.jpg',
            end: '2013-11-01'
        },
        {
            id: 'fraternite-2020',
            name: 'Fraternité 2020',
            shortName: 'Fraternité 2020',
            site: 'fraternite2020.eu',
            caption: 'Our goal is to enhance EU exchange programmes, such as Erasmus, to contribute to a united Europe based on solidarity among citizens.',
            youtube: '',
            image: 'fraternite2020.png',
            end: '2013-11-01'
        },
        {
            id: 'let-me-vote',
            name: 'Let me vote',
            shortName: 'Let me vote',
            site: 'letmevote.eu',
            caption: 'This initiative aims to reduce the democratic deficit in Europe. Let\'s give each European residing in another European country the right to vote.',
            youtube: '',
            image: 'letMeVote.png',
            end: '2014-02-18'
        },
        { // Has counter
            id: 'media-pluralism',
            name: 'Initiative for media pluralism',
            shortName: 'Media pluralism',
            site: 'mediainitiative.eu',
            caption: 'We the safeguard of the right to independent and pluralistic information as sanctioned by the European charter on human rights.',
            youtube: '',
            image: 'mediaPluralism.jpg',
            end: '2013-11-01'
        },
        {
            id: 'one-of-us',
            name: 'One of us',
            shortName: 'One of us',
            site: 'oneofus.eu',
            caption: 'The human embryo is \'One of Us\'. Help us in banning European financing of activities which presuppose its destruction.',
            youtube: 'KTsHpU3aCeg',
            image: 'oneOfUs.png',
            end: '2013-11-01'
        },
        {
            id: 'one-single-tariff',
            name: 'One single tariff',
            shortName: 'Single tariff',
            site: 'onesingletariff.com',
            caption: 'We want to eliminate roaming charges across the European Union and complete the common mobile phone market.',
            youtube: '',
            image: 'oneSingleTariff.png',
            end: '2014-03-12'
        },
        { // Has counter
            id: 'right-to-water',
            name: 'Water is a human right',
            shortName: 'Water right',
            site: 'right2water.eu',
            caption: 'Water is a public good, not a commodity. We want legislation implementing the human right to water and sanitation.',
            youtube: '7fQcDDF0f4c',
            image: 'rightToWater.png',
            end: '2013-11-01'
        },
        { // Has counter
            id: 'stop-vivisection',
            name: 'Stop vivisection',
            shortName: 'Stop vivisection',
            site: 'stopvivisection.eu',
            caption: 'Say \'No\' to animal experimentation and urge the EU implement scientific approaches which protect humans and animals.',
            youtube: '',
            image: 'stopVivisection.png',
            end: '2013-11-01'
        },
        {
            id: 'responsible-waste',
            name: 'Responsible waste',
            shortName: 'Responsible waste',
            site: 'ice.id.st',
            caption: 'Support us to promote responsible waste management that departs from the current harmful incinerator-based solutions.',
            youtube: '',
            image: 'responsibleWaste.png',
            end: '2013-11-01'
        }
    ]
};
