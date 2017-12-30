PresentType = {
    LINK : 0,
    IMAGE : 1,
    MESSAGE : 2,
    SOUND : 3
};

var presents = [
    {
        'type': PresentType.IMAGE,
        "description": 'Ein schönes Bild.',
        'value': 'https://www.ibkinfo.at/media/3997/weihnachten-c-fotolia-2.jpg?anchor=center&mode=crop&width=1000&height=570&rnd=130953372340000000'
    },
    {
        'type': PresentType.IMAGE,
        "description": 'Ein schöner Adventkranz.',
        'value': 'https://cf.katholisch.de/fotolia_17338920_adventskranz-1.jpg'
    },
    {
        'type': PresentType.IMAGE,
        "description": 'Den kenn ich doch?',
        'value': 'http://www.opixx.org/images/for-free/details/holidays_30/weihnachtsmann_grafik_20131212_2027787081.png'
    },
    {
        'type': PresentType.IMAGE,
        "description": 'Schön formartiertes php',
        'value': 'https://thepracticaldev.s3.amazonaws.com/i/21sb87l3qafmx0as40cu.png'
    },
    {
        'type': PresentType.IMAGE,
        "description": 'Bald sind ferien.',
        'value': 'https://www.ferien-und-feiertage.de/assets/images/9/ferien_buntehaende-ef5467f9.jpg'
    },
    {
        'type': PresentType.IMAGE,
        "description": 'Geschenke :D',
        'value': 'http://humanepursuits.com/wp-content/uploads/2013/11/christmaspresents.jpg'
    },
    {
        'type': PresentType.LINK,
        "description": 'Damit man die Zeit immer im Blick hat!',
        'value': 'http://www.xmasclock.com/'
    },
    {
        'type': PresentType.LINK,
        "description": 'Anleitung für leckeren Zimtsternen',
        'value': 'https://www.gutekueche.at/zimtsterne-rezept-25264'
    },
    {
        'type': PresentType.LINK,
        "description": 'Anleitung für leckeren Vanillekekse',
        'value': 'https://www.gutekueche.at/suesse-vanillekipferl-rezept-7641'
    },
    {
        'type': PresentType.LINK,
        "description": 'Wunschzettel, damit man auch nichts vergisst!',
        'value': 'https://www.amazon.de/gp/registry/wishlist-homepage.html'
    },
    {
        'type': PresentType.LINK,
        "description": 'Vorlage für den Brief ans Christkind.',
        'value': 'http://www.juniorpost.de/weihnachtsmann-briefe-vorlagen.php#vorlage-christkind'
    },
    {
        'type': PresentType.LINK,
        "description": 'Schon mal zum Üben.',
        'value': 'http://www.stillenacht.at/de/text_und_musik.asp'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'Golden klingt der Tag ins Licht,\nleuchtet\'s von gestern ins Morgen,\nund ganz leise, damit es nicht bricht,\nruht sich alles im Geborgnen.\n\n(© Monika Minder)'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'Strassen dick beschneit\nEin Schlitten zieht mit viel Geläut\nDurch des Winters Flockenpracht.\nLeise summen Weihnachtslieder\ndurch die stille Nacht.\n\n(© Monika Minder)'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'Die Sterne zünden ihre Lampen an,\nauf unbedachte Frist,\ndamit sie nicht auswischt die Spur,\ndie der Himmel schickt.\n\n(© Jo M. Wysser)'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'Ein Licht so sanft den Weg erhellt,\nwo ein Stern am Himmelszelt,\nwo man im Dunkeln schreiten mag\nund Blumen blühen in den neuen Tag.\n\n(© Monika Minder)'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'Sylvesterglocken! Sie tönen\nSo hell durch die kalte Luft,\nSie läuten das Jahr zu Grabe\nMit Weihnachtstannenduft.'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Ein kurzes Gedicht.',
        'value': 'So ganz still und zahm\nhockt die lustige Schar im Zimmer.\nGrossmutter erzählt wie jedes Jahr\nund am Baum knistert Kerzengeflimmer.\n\n(© Monika Minder)'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Frohe Weihnachten!.',
        'value': 'Frohe Weihnachten!'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Frohe Festtage!.',
        'value': 'Frohe Festtage!'
    },
    {
        'type': PresentType.MESSAGE,
        "description": 'Kekse.',
        'value': 'blabla blub ich bin ein Text.'
    },
    {
        'type': PresentType.SOUND,
        "description": 'Weihnachtsglocken sound',
        'value': 'http://soundbible.com/mp3/Sleigh Bells Ringing-SoundBible.com-1890102065.mp3'
    },
    {
        'type': PresentType.SOUND,
        "description": 'Schneesturm sound',
        'value': 'http://soundbible.com/mp3/Wind-Mark_DiAngelo-1940285615.mp3'
    },
    {
        'type': PresentType.SOUND,
        "description": 'Schneesturm sound',
        'value': 'http://soundbible.com/mp3/Wind-Mark_DiAngelo-1940285615.mp3'
    }
];

(function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
})(presents);