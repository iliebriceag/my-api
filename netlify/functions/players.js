exports.handler = async function(event, context) {

    const playersData = [
        {
            "id": 1,
            "name": "Andrei Rațiu",
            "title": "Apărare și Energie",
            "description": "Andrei Rațiu este un jucător de fotbal talentat, cunoscut pentru energia sa și abilitățile defensive.",
            "data": "2024-06-10",
            "image": "https://sportpesurse.ro/wp-content/uploads/2024/07/profimedia-0887615946.jpg",
            "category": "Fundaș",
            "current_team": "Rayo Vallecano",
            "market_value": "€2 million",
            "transfer_history": [
                {"team": "Villarreal", "year": 2019},
                {"team": "Huesca", "year": 2021},
                {"team": "Rayo Vallecano", "year": 2023}
            ],
            "matches_played": {
                "Villarreal": 30,
                "Huesca": 50,
                "Rayo Vallecano": 25
            }
        },
        {
            "id": 2,
            "name": "Nicolae Stanciu",
            "title": "Creativitate și Pasare",
            "description": "Nicolae Stanciu este cunoscut pentru creativitatea și abilitatea sa de a face pase decisive.",
            "data": "2024-02-01",
            "image": "https://tmssl.akamaized.net/images/foto/galerie/nicolae-stanciu-romnaia-euro-2024-1719301358-140785.jpg",
            "category": "Mijlocaș",
            "current_team": "Dhamk Club",
            "market_value": "€6 million",
            "transfer_history": [
                {"team": "Steaua București", "year": 2016},
                {"team": "Anderlecht", "year": 2017},
                {"team": "Slavia Praga", "year": 2019},
                {"team": "Dhamk Club", "year": 2023}
            ],
            "matches_played": {
                "Steaua București": 45,
                "Anderlecht": 25,
                "Slavia Praga": 60,
                "Dhamk Club": 20
            }
        },
        {
            "id": 3,
            "name": "Lionel Messi",
            "title": "Dribling și Creativitate",
            "description": "Lionel Messi este recunoscut pentru driblingul său excelent și creativitatea sa pe teren.",
            "data": "2024-02-01",
            "image": "https://cdn.pixabay.com/photo/2017/01/25/17/20/lionel-2008448_1280.jpg",
            "category": "Atacant/Mijlocaș",
            "current_team": "Inter Miami",
            "market_value": "€40 million",
            "transfer_history": [
                {"team": "Barcelona", "year": 2004},
                {"team": "Paris Saint-Germain", "year": 2021},
                {"team": "Inter Miami", "year": 2023}
            ],
            "matches_played": {
                "Barcelona": 520,
                "Paris Saint-Germain": 50,
                "Inter Miami": 25
            }
        },
        {
            "id": 4,
            "name": "Cristiano Ronaldo",
            "title": "Goluri și Realizări",
            "description": "Cristiano Ronaldo este cunoscut pentru abilitatea sa incredibilă de a marca goluri și pentru realizările sale impresionante în fotbal.",
            "data": "2024-03-21",
            "image": "https://cdn.pixabay.com/photo/2023/11/07/20/24/cristiano-ronaldo-8373364_1280.jpg",
            "category": "Atacant",
            "current_team": "Al Nassr",
            "market_value": "€35 million",
            "transfer_history": [
                {"team": "Sporting CP", "year": 2003},
                {"team": "Manchester United", "year": 2003},
                {"team": "Real Madrid", "year": 2009},
                {"team": "Juventus", "year": 2018},
                {"team": "Manchester United", "year": 2021},
                {"team": "Al Nassr", "year": 2022}
            ],
            "matches_played": {
                "Sporting CP": 31,
                "Manchester United": 196,
                "Real Madrid": 292,
                "Juventus": 98,
                "Al Nassr": 30
            }
        },
        {
            "id": 5,
            "name": "Kylian Mbappe",
            "title": "Viteză",
            "description": "Kylian Mbappe este un star tânăr în fotbal, cunoscut pentru viteza și agilitatea sa.",
            "data": "2024-08-13",
            "image": "https://cdn.pixabay.com/photo/2022/06/08/10/00/kylian-mbappe-7250181_1280.jpg",
            "category": "Atacant",
            "current_team": "Paris Saint-Germain",
            "market_value": "€160 million",
            "transfer_history": [
                {"team": "Monaco", "year": 2015},
                {"team": "Paris Saint-Germain", "year": 2017}
            ],
            "matches_played": {
                "Monaco": 60,
                "Paris Saint-Germain": 150
            }
        },
        {
            "id": 6,
            "name": "Mohamed Salah",
            "title": "Perseverență și Talent",
            "description": "Mohamed Salah a devenit unul dintre cei mai buni jucători din lume prin perseverența și talentul său.",
            "data": "2024-05-30",
            "image": "https://i.pinimg.com/originals/58/83/ab/5883ab7cb651a251b364c15609a81a4f.jpg",
            "category": "Atacant",
            "current_team": "Liverpool",
            "market_value": "€100 million",
            "transfer_history": [
                {"team": "Basel", "year": 2012},
                {"team": "Chelsea", "year": 2014},
                {"team": "Fiorentina", "year": 2015},
                {"team": "Roma", "year": 2015},
                {"team": "Liverpool", "year": 2017}
            ],
            "matches_played": {
                "Basel": 47,
                "Chelsea": 13,
                "Fiorentina": 16,
                "Roma": 65,
                "Liverpool": 180
            }
        },
        {
            "id": 7,
            "name": "Sergio Ramos",
            "title": "Apărare și Lider",
            "description": "Sergio Ramos este un apărător de top și un lider pe teren.",
            "data": "2024-08-01",
            "image": "https://w0.peakpx.com/wallpaper/40/165/HD-wallpaper-sergio-ramos-real-madrid-sergio-ramos-spain-thumbnail.jpg",
            "category": "Fundaș",
            "current_team": "Sevilla",
            "market_value": "€10 million",
            "transfer_history": [
                {"team": "Sevilla", "year": 2004},
                {"team": "Real Madrid", "year": 2005},
                {"team": "Paris Saint-Germain", "year": 2021},
                {"team": "Sevilla", "year": 2023}
            ],
            "matches_played": {
                "Sevilla": 60,
                "Real Madrid": 470,
                "Paris Saint-Germain": 30,
                "Sevilla": 5
            }
        },
        {
            "id": 8,
            "name": "Luka Modric",
            "title": "Mijlocaș și Viziune",
            "description": "Luka Modric este un mijlocaș excelent cunoscut pentru viziunea sa pe teren și abilitatea de a controla jocul.",
            "data": "2024-03-05",
            "image": "https://i.pinimg.com/originals/fe/4c/c3/fe4cc3021a48226100248c0acc7de29b.jpg",
            "category": "Mijlocaș",
            "current_team": "Real Madrid",
            "market_value": "€15 million",
            "transfer_history": [
                {"team": "Dinamo Zagreb", "year": 2005},
                {"team": "Tottenham Hotspur", "year": 2008},
                {"team": "Real Madrid", "year": 2012}
            ],
            "matches_played": {
                "Dinamo Zagreb": 50,
                "Tottenham Hotspur": 127,
                "Real Madrid": 350
            }
        },
        {
            "id": 9,
            "name": "Neymar Jr.",
            "title": "Tehnică și Spectacol",
            "description": "Neymar Jr. este cunoscut pentru tehnica sa impresionantă și stilul său spectaculos de joc.",
            "data": "2024-01-17",
            "image": "https://wallpaperaccess.com/full/1561408.jpg",
            "category": "Atacant",
            "current_team": "Al Hilal",
            "market_value": "€75 million",
            "transfer_history": [
                {"team": "Santos", "year": 2009},
                {"team": "Barcelona", "year": 2013},
                {"team": "Paris Saint-Germain", "year": 2017},
                {"team": "Al Hilal", "year": 2023}
            ],
            "matches_played": {
                "Santos": 103,
                "Barcelona": 123,
                "Paris Saint-Germain": 112,
                "Al Hilal": 10
            }
        },
        {
            "id": 10,
            "name": "Robert Lewandowski",
            "title": "Atacant și Finalizare",
            "description": "Robert Lewandowski este un atacant de elită, cunoscut pentru abilitatea sa de a finaliza și de a marca goluri.",
            "data": "2024-04-12",
            "image": "https://i.pinimg.com/originals/d1/41/8b/d1418b7ebf4b67b4a9bc83dff2333769.jpg",
            "category": "Atacant",
            "current_team": "Barcelona",
            "market_value": "€50 million",
            "transfer_history": [
                {"team": "Lech Poznan", "year": 2008},
                {"team": "Borussia Dortmund", "year": 2010},
                {"team": "Bayern Munich", "year": 2014},
                {"team": "Barcelona", "year": 2022}
            ],
            "matches_played": {
                "Lech Poznan": 58,
                "Borussia Dortmund": 131,
                "Bayern Munich": 210,
                "Barcelona": 30
            }
        },
        {
            "id": 11,
            "name": "Virgil van Dijk",
            "title": "Apărare și Forță",
            "description": "Virgil van Dijk este unul dintre cei mai buni fundași din lume, cunoscut pentru forța și abilitatea sa defensivă.",
            "data": "2024-02-18",
            "image": "https://wallpaperaccess.com/full/1749140.jpg",
            "category": "Fundaș",
            "current_team": "Liverpool",
            "market_value": "€70 million",
            "transfer_history": [
                {"team": "Groningen", "year": 2011},
                {"team": "Celtic", "year": 2013},
                {"team": "Southampton", "year": 2015},
                {"team": "Liverpool", "year": 2018}
            ],
            "matches_played": {
                "Groningen": 66,
                "Celtic": 76,
                "Southampton": 67,
                "Liverpool": 125
            }
        },
        {
            "id": 12,
            "name": "Kevin De Bruyne",
            "title": "Viziune și Pasă",
            "description": "Kevin De Bruyne este cunoscut pentru viziunea sa extraordinară și abilitatea sa de a pasa precis.",
            "data": "2024-03-11",
            "image": "https://wallpaperaccess.com/full/1749142.jpg",
            "category": "Mijlocaș",
            "current_team": "Manchester City",
            "market_value": "€85 million",
            "transfer_history": [
                {"team": "Genk", "year": 2008},
                {"team": "Chelsea", "year": 2012},
                {"team": "Wolfsburg", "year": 2014},
                {"team": "Manchester City", "year": 2015}
            ],
            "matches_played": {
                "Genk": 97,
                "Chelsea": 3,
                "Wolfsburg": 52,
                "Manchester City": 180
            }
        },
        {
            "id": 13,
            "name": "Karim Benzema",
            "title": "Experiență și Finalizare",
            "description": "Karim Benzema este un atacant experimentat, cunoscut pentru abilitatea sa de a finaliza și a marca goluri.",
            "data": "2024-02-14",
            "image": "https://wallpaperaccess.com/full/1749143.jpg",
            "category": "Atacant",
            "current_team": "Al-Ittihad",
            "market_value": "€35 million",
            "transfer_history": [
                {"team": "Lyon", "year": 2005},
                {"team": "Real Madrid", "year": 2009},
                {"team": "Al-Ittihad", "year": 2023}
            ],
            "matches_played": {
                "Lyon": 112,
                "Real Madrid": 375,
                "Al-Ittihad": 15
            }
        },
        {
            "id": 14,
            "name": "Thibaut Courtois",
            "title": "Reflexe și Forță",
            "description": "Thibaut Courtois este un portar de elită, cunoscut pentru reflexele sale rapide și forța sa.",
            "data": "2024-03-29",
            "image": "https://wallpaperaccess.com/full/1749145.jpg",
            "category": "Portar",
            "current_team": "Real Madrid",
            "market_value": "€65 million",
            "transfer_history": [
                {"team": "Genk", "year": 2009},
                {"team": "Chelsea", "year": 2011},
                {"team": "Atletico Madrid (loan)", "year": 2011},
                {"team": "Real Madrid", "year": 2018}
            ],
            "matches_played": {
                "Genk": 41,
                "Chelsea": 126,
                "Atletico Madrid": 154,
                "Real Madrid": 115
            }
        },
        {
            "id": 15,
            "name": "Paul Pogba",
            "title": "Forță și Tehnică",
            "description": "Paul Pogba este un mijlocaș talentat, cunoscut pentru forța și tehnica sa impresionantă.",
            "data": "2024-02-06",
            "image": "https://wallpaperaccess.com/full/1749147.jpg",
            "category": "Mijlocaș",
            "current_team": "Juventus",
            "market_value": "€40 million",
            "transfer_history": [
                {"team": "Manchester United", "year": 2011},
                {"team": "Juventus", "year": 2012},
                {"team": "Manchester United", "year": 2016},
                {"team": "Juventus", "year": 2022}
            ],
            "matches_played": {
                "Manchester United": 120,
                "Juventus": 105
            }
        },
        {
            "id": 16,
            "name": "Eden Hazard",
            "title": "Tehnică și Dribling",
            "description": "Eden Hazard este un jucător de atac, cunoscut pentru tehnica sa fină și abilitatea de a dribla.",
            "data": "2024-01-09",
            "image": "https://wallpaperaccess.com/full/1749150.jpg",
            "category": "Atacant",
            "current_team": "Real Madrid",
            "market_value": "€15 million",
            "transfer_history": [
                {"team": "Lille", "year": 2007},
                {"team": "Chelsea", "year": 2012},
                {"team": "Real Madrid", "year": 2019}
            ],
            "matches_played": {
                "Lille": 147,
                "Chelsea": 245,
                "Real Madrid": 30
            }
        },
        {
            "id": 17,
            "name": "Alisson Becker",
            "title": "Reflexe și Poziționare",
            "description": "Alisson Becker este un portar de top, cunoscut pentru reflexele și poziționarea sa excelentă.",
            "data": "2024-02-22",
            "image": "https://wallpaperaccess.com/full/1749151.jpg",
            "category": "Portar",
            "current_team": "Liverpool",
            "market_value": "€60 million",
            "transfer_history": [
                {"team": "Internacional", "year": 2013},
                {"team": "Roma", "year": 2016},
                {"team": "Liverpool", "year": 2018}
            ],
            "matches_played": {
                "Internacional": 44,
                "Roma": 64,
                "Liverpool": 85
            }
        },
        {
            "id": 18,
            "name": "Joshua Kimmich",
            "title": "Versatilitate și Inteligență",
            "description": "Joshua Kimmich este cunoscut pentru versatilitatea și inteligența sa tactică.",
            "data": "2024-03-13",
            "image": "https://wallpaperaccess.com/full/1749153.jpg",
            "category": "Mijlocaș/Fundaș",
            "current_team": "Bayern Munich",
            "market_value": "€75 million",
            "transfer_history": [
                {"team": "Leipzig", "year": 2013},
                {"team": "Bayern Munich", "year": 2015}
            ],
            "matches_played": {
                "Leipzig": 55,
                "Bayern Munich": 140
            }
        },
        {
            "id": 19,
            "name": "Sadio Mane",
            "title": "Viteză și Determinare",
            "description": "Sadio Mane este cunoscut pentru viteza și determinarea sa pe teren.",
            "data": "2024-04-25",
            "image": "https://wallpaperaccess.com/full/1749154.jpg",
            "category": "Atacant",
            "current_team": "Al Nassr",
            "market_value": "€45 million",
            "transfer_history": [
                {"team": "Metz", "year": 2011},
                {"team": "Red Bull Salzburg", "year": 2012},
                {"team": "Southampton", "year": 2014},
                {"team": "Liverpool", "year": 2016},
                {"team": "Bayern Munich", "year": 2022},
                {"team": "Al Nassr", "year": 2023}
            ],
            "matches_played": {
                "Metz": 19,
                "Red Bull Salzburg": 63,
                "Southampton": 67,
                "Liverpool": 126,
                "Bayern Munich": 30,
                "Al Nassr": 10
            }
        },
        {
            "id": 20,
            "name": "Raheem Sterling",
            "title": "Dribling și Viteză",
            "description": "Raheem Sterling este cunoscut pentru driblingul și viteza sa pe teren.",
            "data": "2024-03-20",
            "image": "https://wallpaperaccess.com/full/1749155.jpg",
            "category": "Atacant",
            "current_team": "Chelsea",
            "market_value": "€50 million",
            "transfer_history": [
                {"team": "Liverpool", "year": 2010},
                {"team": "Manchester City", "year": 2015},
                {"team": "Chelsea", "year": 2022}
            ],
            "matches_played": {
                "Liverpool": 95,
                "Manchester City": 202,
                "Chelsea": 30
            }
        },
        {
            "id": 21,
            "name": "Phil Foden",
            "title": "Tânăr și Talentat",
            "description": "Phil Foden este un jucător tânăr și talentat, cunoscut pentru abilitățile sale tehnice și viziunea pe teren.",
            "data": "2024-02-05",
            "image": "https://wallpaperaccess.com/full/1749156.jpg",
            "category": "Mijlocaș",
            "current_team": "Manchester City",
            "market_value": "€90 million",
            "transfer_history": [
                {"team": "Manchester City", "year": 2017}
            ],
            "matches_played": {
                "Manchester City": 75
            }
        },
        {
            "id": 22,
            "name": "Jadon Sancho",
            "title": "Creativitate și Viteză",
            "description": "Jadon Sancho este cunoscut pentru creativitatea și viteza sa pe teren.",
            "data": "2024-01-28",
            "image": "https://wallpaperaccess.com/full/1749157.jpg",
            "category": "Atacant",
            "current_team": "Manchester United",
            "market_value": "€85 million",
            "transfer_history": [
                {"team": "Borussia Dortmund", "year": 2017},
                {"team": "Manchester United", "year": 2021}
            ],
            "matches_played": {
                "Borussia Dortmund": 82,
                "Manchester United": 25
            }
        },
        {
            "id": 23,
            "name": "Timo Werner",
            "title": "Viteză și Finalizare",
            "description": "Timo Werner este un atacant de elită, cunoscut pentru viteza și abilitatea sa de a finaliza.",
            "data": "2024-04-09",
            "image": "https://wallpaperaccess.com/full/1749158.jpg",
            "category": "Atacant",
            "current_team": "RB Leipzig",
            "market_value": "€40 million",
            "transfer_history": [
                {"team": "Stuttgart", "year": 2013},
                {"team": "RB Leipzig", "year": 2016},
                {"team": "Chelsea", "year": 2020},
                {"team": "RB Leipzig", "year": 2022}
            ],
            "matches_played": {
                "Stuttgart": 63,
                "RB Leipzig": 98,
                "Chelsea": 56
            }
        },
        {
            "id": 24,
            "name": "Erling Haaland",
            "title": "Forță și Finalizare",
            "description": "Erling Haaland este un atacant puternic, cunoscut pentru forța și abilitatea sa de a marca goluri.",
            "data": "2024-03-14",
            "image": "https://wallpaperaccess.com/full/1749159.jpg",
            "category": "Atacant",
            "current_team": "Manchester City",
            "market_value": "€200 million",
            "transfer_history": [
                {"team": "Molde", "year": 2017},
                {"team": "Red Bull Salzburg", "year": 2019},
                {"team": "Borussia Dortmund", "year": 2020},
                {"team": "Manchester City", "year": 2022}
            ],
            "matches_played": {
                "Molde": 50,
                "Red Bull Salzburg": 27,
                "Borussia Dortmund": 58,
                "Manchester City": 25
            }
        },
        {
            "id": 25,
            "name": "Marc-André ter Stegen",
            "title": "Reflexe și Distribuire",
            "description": "Marc-André ter Stegen este un portar excelent, cunoscut pentru reflexele și abilitatea sa de a distribui mingea.",
            "data": "2024-04-07",
            "image": "https://wallpaperaccess.com/full/1749160.jpg",
            "category": "Portar",
            "current_team": "Barcelona",
            "market_value": "€60 million",
            "transfer_history": [
                {"team": "Borussia Mönchengladbach", "year": 2010},
                {"team": "Barcelona", "year": 2014}
            ],
            "matches_played": {
                "Borussia Mönchengladbach": 108,
                "Barcelona": 140
            }
        }
    ];

    const id = event.queryStringParameters && event.queryStringParameters.id;

    if (id) {
        const player = playersData.find(p => p.id === parseInt(id));

        if (player) {
            return {
                statusCode: 200,
                body: JSON.stringify(player),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Player not found' }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            };
        }
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify(playersData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    }
};
