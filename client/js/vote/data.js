var countryData = [
    {
        country: 'Austria',
        nationality: 'Austrian',
        documents: ['Personalausweis', 'Reisepass']
    }, {
        country: 'Belgium',
        nationality: 'Belgian',
        documents: []
    }, {
        country: 'Bulgaria',
        nationality: 'Bulgarian',
        documents: ['Единен граждански номер']
    }, {
        country: 'Cyprus',
        nationality: 'Cypriot',
        documents: ['Δελτίο Ταυτότητας', 'Διαβατήριο']
    }, {
        country: 'Czech Republic',
        nationality: 'Czech',
        documents: ['Občanský průkaz', 'Cestovní pas']
    }, {
        country: 'Denmark',
        nationality: 'Danish',
        documents: []
    }, {
        country: 'Estonia',
        nationality: 'Estonian',
        documents: []
    }, {
        country: 'Finland',
        nationality: 'Finnish',
        documents: []
    }, {
        country: 'France',
        nationality: 'French',
        documents: ['Passeport', 'Carte nationale d’identité', 'Titre de séjour', 'Permis de conduire'] // + "Autre"
    }, {
        country: 'Germany',
        nationality: 'German',
        documents: []
    }, {
        country: 'Greece',
        nationality: 'Greek',
        documents: ['Δελτίο Αστυνομικής Ταυτότητας', 'Διαβατήριο', 'Βεβαίωση Εγγραφής Πολιτών Ε.Ε./Έγγραφο πιστοποίησης μόνιμης διαμονής πολίτη Ε.Ε.']
    }, {
        country: 'Hungary',
        nationality: 'Hungarian',
        documents: ['személyazonosító igazolvány', 'útlevél', 'személyi azonosító szám (személyi szám)']
    }, {
        country: 'Ireland',
        nationality: 'Irish',
        documents: []
    }, {
        country: 'Italy',
        nationality: 'Italian',
        documents: ['Passaporto, inclusa l’indicazione dell’autorità di rilascio', 'Carta di identità (identity card), inclusa l’indicazione dell’autorità di rilascio']
    }, {
        country: 'Latvia',
        nationality: 'Latvian',
        documents: 'Personas kods'
    }, {
        country: 'Lithuania',
        nationality: 'Lithuanian',
        documents: 'Asmens kodas'
    }, {
        country: 'Luxembourg',
        nationality: 'Luxembourgish',
        documents: 'Numéro d’identification national (numéro inscrit sur la carte d’identification de la Sécurité sociale)'
    }, {
        country: 'Malta',
        nationality: 'Maltese',
        documents: ['Karta tal-Identità']
    }, {
        country: 'Netherlands',
        nationality: 'Dutch',
        documents: []
    }, {
        country: 'Poland',
        nationality: 'Polish',
        documents: ['Numer ewidencyjny PESEL']
    }, {
        country: 'Portugal',
        nationality: 'Portuguese',
        documents: ['Bilhete de identidade', 'Passaporte', 'Cartão de Cidadão']
    }, {
        country: 'Romania',
        nationality: 'Romanian',
        documents: ['carte de identitate', 'pasaport', 'certificat de inregistrare', 'cartea de rezidenta permanenta pentru cetatenii UE', 'Cod Numeric Personal']
    }, {
        country: 'Slovakia',
        nationality: 'Slovak',
        documents: []
    }, {
        country: 'Slovenia',
        nationality: 'Slovenian',
        documents: ['Osebna izkaznica', 'Potni list']
    }, {
        country: 'Spain',
        nationality: 'Spanish',
        documents: ['Documento Nacional de Identidad', 'Pasaporte']
    }, {
        country: 'Sweden',
        nationality: 'Swedish',
        documents: ['Personnummer in identity card', 'Personnummer in passport']
    }, {
        country: 'United Kingdom',
        nationality: 'British',
        documents: []
    }
];

var nationalities = countryData
    .map(function(element) { return element.nationality })
    .sort();

var data = {
    sections: [{
        title: 'Basics',
        icon: 'user',
        inputs: [{
            name: 'Names'
        }, {
            name: 'Surnames'
        }, {
            name: 'Date of birth',
            placeholder: 'YYYY-MM-DD',
            id: 'date-of-birth'
        }],
    }, {
        title: 'Identification',
        icon: 'flag',
        inputs: [{
            name: 'Nationality',
            dropdown: 'Nationality',
            id: 'nationality',
            dropdownValues: nationalities.map(function(nationality) { return { value: nationality }})
        }, {
            name: 'Document',
            id: 'document',
            dropdown: 'Document'
        }, {
            name: 'Document number',
            id: 'document-number'
        }]
    }, {
        title: 'Address',
        icon: 'home',
        inputs: [{
            name: 'Street address'
        }, {
            name: 'Postal code'
        }, {
            name: 'City'
        }, {
            name: 'Country',
            dropdown: 'Country',
            dropdownValues: countryData.map(function(element) { return { value: element.country }})
        }]
    }, {
        title: 'Final steps',
        icon: 'ok'
    }]
};
