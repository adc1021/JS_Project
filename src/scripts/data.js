
const ChampionJson = {
    "generated_at": "2022-11-11T18:44:36+00:00",
    "categories": [{
        "id": "sr:category:1089",
        "name": "UFC",
        "weight_classes": [{
            "description": "bantamweight",
            "competitor": {
                "id": "sr:competitor:260623",
                "name": "Sterling, Aljamain",
                "abbreviation": "STE"
            }
        }, {
            "description": "featherweight",
            "competitor": {
                "id": "sr:competitor:290262",
                "name": "Volkanovski, Alex",
                "abbreviation": "VOL"
            }
        }, {
            "description": "flyweight",
            "competitor": {
                "id": "sr:competitor:340506",
                "name": "Figueiredo, Deiveson",
                "abbreviation": "FIG"
            }
        }, {
            "description": "heavyweight",
            "competitor": {
                "id": "sr:competitor:250145",
                "name": "Ngannou, Francis",
                "abbreviation": "NGA"
            }
        }, {
            "description": "middleweight",
            "competitor": {
                "id": "sr:competitor:410485",
                "name": "Adesanya, Israel",
                "abbreviation": "ADE"
            }
        }, {
            "description": "welterweight",
            "competitor": {
                "id": "sr:competitor:256121",
                "name": "Edwards, Leon",
                "abbreviation": "EDW"
            }
        }, {
            "description": "womens_bantamweight",
            "competitor": {
                "id": "sr:competitor:246051",
                "name": "Nunes, Amanda",
                "abbreviation": "NUN"
            }
        }, {
            "description": "womens_featherweight",
            "competitor": {
                "id": "sr:competitor:246051",
                "name": "Nunes, Amanda",
                "abbreviation": "NUN"
            }
        }, {
            "description": "womens_flyweight",
            "competitor": {
                "id": "sr:competitor:246053",
                "name": "Shevchenko, Valentina",
                "abbreviation": "SHE"
            }
        }, {
            "description": "womens_strawweight",
            "competitor": {
                "id": "sr:competitor:253353",
                "name": "Esparza, Carla",
                "abbreviation": "ESP"
            }
        }]
    }, {
        "id": "sr:category:1090",
        "name": "Bellator"
    }]
};

ChampionData = JSON.parse(ChampionJson);

export default ChampionData; 
