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
            description: '30 km/h limits are an inexpensive and popular way to improve safety, cut pollution and encourage smarter travel choices.',
            youtube: '',
            image: '30kmh.jpg',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Heike Aghte',
                    email: 'heike.aghte@30kmh.eu'
                },
                substitute: {
                    name: 'Martti Tulenheimo',
                    email: 'martti.tulenheimo@30kmh.eu'
                }
            }
        },
        {
            id: 'affordable-energy',
            name: 'Affordable energy',
            shortName: 'Affordable energy',
            site: 'affordable-energy.eu',
            description: 'Let\'s scrap the European climate and energy package costing billions on innefective unilateral action at a time of economic crisis.',
            youtube: '',
            image: 'affordableEnergy.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Ludwik Dorn',
                    email: 'ldorn.eci@onet.eu'
                },
                substitute: {
                    name: 'Paul Oakden',
                    email: 'pauloakden@aol.com'
                }
            }
        },
        {
            id: 'basic-income',
            name: 'Unconditional basic income',
            shortName: 'Basic income',
            site: 'basicincome2013.eu',
            description: 'This initiative aims at exploring the feasibility of a European basic income scheme. Stand up for basic income as a human right.',
            youtube: '',
            image: 'basicIncome.jpg',
            end: '2014-01-14',
            members: {
                representative: {
                    name: 'Klaus Sambor',
                    email: 'aon.914008712@aon.at'
                },
                substitute: {
                    name: 'Ronald Blaschke',
                    email: 'blaschke@grundeinkommen.de'
                }
            }
        },
        {
            id: 'ecocide',
            name: 'Ecocide',
            shortName: 'Ecocide',
            site: 'endecocide.eu',
            description: 'Ecocide is the extensive damage to, destruction of or loss of ecosystems of a given territory. Let\'s end ecocide in Europe together.',
            youtube: 'j1uTDE5tayQ',
            image: 'ecocide.jpg',
            end: '2014-01-21',
            members: {
                representative: {
                    name: 'Prisca Merz',
                    email: 'prisca@endecocide.eu'
                },
                substitute: {
                    name: 'Viktoria Heller',
                    email: 'viktoria@endecocide.eu'
                }
            }
        },
        {
            id: 'education-trust',
            name: 'Education trust',
            shortName: 'Education trust',
            site: 'euroedtrust.eu',
            description: 'We believe in building a Europe with equal access for all to the possibility to study and learn in a truly multi-cultural and European environment.',
            youtube: 'lzYbXdxUCnU',
            image: 'educationTrust.jpg',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Ana Gorey',
                    email: 'ana.gorey@coe.int'
                },
                substitute: {
                    name: 'Caroline Hetterschijt',
                    email: 'caroline4687@gmail.com'
                }
            }
        },
        {
            id: 'fraternite-2020',
            name: 'Fraternité 2020',
            shortName: 'Fraternité 2020',
            site: 'fraternite2020.eu',
            description: 'Our goal is to enhance EU exchange programmes, such as Erasmus, to contribute to a united Europe based on solidarity among citizens.',
            youtube: '',
            image: 'fraternite2020.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Luca Copetti',
                    email: 'LucaCopetti@fraternite2020.eu'
                },
                substitute: {
                    name: 'Simona Pronckuté',
                    email: 'SimonaPronckute@Fraternite2020.eu'
                }
            }
        },
        {
            id: 'let-me-vote',
            name: 'Let me vote',
            shortName: 'Let me vote',
            site: 'letmevote.eu',
            description: 'This initiative aims to reduce the democratic deficit in Europe. Let\'s give each European residing in another European country the right to vote.',
            youtube: '',
            image: 'letMeVote.png',
            end: '2014-02-18',
            members: {
                representative: {
                    name: 'Philippe Cayla',
                    email: 'philippe.cayla@letmevote.eu'
                },
                substitute: {
                    name: 'Alain Brun',
                    email: 'alain.brun@letmevote.eu'
                } // Monique VEAUTE, Jürgen VAHLBERG, Reinder RUSTENA, Lydia VAZQUEZ JIMENEZ, Nicolas DELABY
            }
        },
        { // Has counter
            id: 'media-pluralism',
            name: 'Initiative for media pluralism',
            shortName: 'Media pluralism',
            site: 'mediainitiative.eu',
            description: 'Let\'s safeguard the right to independent and pluralistic information as sanctioned by the European charter on human rights.',
            youtube: '',
            image: 'mediaPluralism.jpg',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Ségolène Pruvot',
                    email: 'info@mediainitiative.eu'
                },
                substitute: {
                    name: 'Cayetana De Zulueta',
                    email: 'italia@mediainitiative.eu'
                }
            }
        },
        {
            id: 'one-of-us',
            name: 'One of us',
            shortName: 'One of us',
            site: 'oneofus.eu',
            description: 'The human embryo is \'One of us\'. Help us to ban European Union financing of activities which presuppose its destruction.',
            youtube: 'KTsHpU3aCeg',
            image: 'oneOfUs.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Patrick Gregor Puppinck',
                    email: 'g.puppinck@gmail.com'
                },
                substitute: {
                    name: 'Filippo Vari',
                    email: 'filippo.vari@gmail.com'
                }
            }
        },
        {
            id: 'one-single-tariff',
            name: 'One single tariff',
            shortName: 'Single tariff',
            site: 'onesingletariff.com',
            description: 'We want to eliminate roaming charges across the European Union and complete the common mobile phone market.',
            youtube: '',
            image: 'oneSingleTariff.png',
            end: '2014-03-12',
            members: {
                representative: {
                    name: 'Vincent Chauvet',
                    email: 'vincent.chauvetone@singletariff.com'
                },
                substitute: {
                    name: 'Martin Wittenberg',
                    email: 'martin.wittenbergon@esingletariff.com'
                }
            }
        },
        { // Has counter
            id: 'right-to-water',
            name: 'Water is a human right',
            shortName: 'Right to water',
            site: 'right2water.eu',
            description: 'Water is a public good, not a commodity. We want legislation implementing the human right to water and sanitation.',
            youtube: '7fQcDDF0f4c',
            image: 'rightToWater.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Anne-Marie Perret',
                    email: 'president@epsu.org'
                },
                substitute: {
                    name: 'Jan Willem Goudriaan',
                    email: 'water@epsu.org'
                }
            }
        },
        { // Has counter
            id: 'stop-vivisection',
            name: 'Stop vivisection',
            shortName: 'Stop vivisection',
            site: 'stopvivisection.eu',
            description: 'Say \'No\' to animal experimentation and urge the EU implement scientific approaches which protect humans and animals.',
            youtube: '',
            image: 'stopVivisection.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'André Menache',
                    email: 'representative.stopvivisection@gmail.com'
                },
                substitute: {
                    name: 'Gianni Tamino',
                    email: 'substitute.stopvivisection@gmail.com'
                }
            }
        },
        {
            id: 'responsible-waste',
            name: 'Responsible waste',
            shortName: 'Responsible waste',
            site: 'ice.id.st',
            description: 'Support us to promote responsible waste management that departs from the current harmful incinerator-based solutions.',
            youtube: '',
            image: 'responsibleWaste.png',
            end: '2013-11-01',
            members: {
                representative: {
                    name: 'Gaël Drillon',
                    email: 'gaeldrillon@gmail.com'
                },
                substitute: {
                    name: 'Sylvie Daubresse',
                    email: 'daubressesyl@hotmail.com'
                }
            }
        }
    ]
};
