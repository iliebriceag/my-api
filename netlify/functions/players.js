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
            "current_team": "Rayo Vallecano"
        },
        {
            "id": 2,
            "name": "Nicolae Stanciu",
            "title": "Creativitate și Pasare",
            "description": "Nicolae Stanciu este cunoscut pentru creativitatea și abilitatea sa de a face pase decisive.",
            "data": "2024-02-01",
            "image": "https://tmssl.akamaized.net/images/foto/galerie/nicolae-stanciu-romnaia-euro-2024-1719301358-140785.jpg",
            "category": "Mijlocaș",
            "current_team": "Dhamk Club"
        },
        {
            "id": 3,
            "name": "Lionel Messi",
            "title": "Dribling și Creativitate",
            "description": "Lionel Messi este recunoscut pentru driblingul său excelent și creativitatea sa pe teren.",
            "data": "2024-02-01",
            "image": "https://cdn.pixabay.com/photo/2017/01/25/17/20/lionel-2008448_1280.jpg",
            "category": "Atacant/Mijlocaș",
            "current_team": "Inter Miami"
        },
        {
            "id": 4,
            "name": "Cristiano Ronaldo",
            "title": "Goluri și Realizări",
            "description": "Cristiano Ronaldo este cunoscut pentru abilitatea sa incredibilă de a marca goluri și pentru realizările sale impresionante în fotbal.",
            "data": "2024-03-21",
            "image": "https://cdn.pixabay.com/photo/2023/11/07/20/24/cristiano-ronaldo-8373364_1280.jpg",
            "category": "Atacant",
            "current_team": "Al Nassr"
        },
        {
            "id": 5,
            "name": "Kylian Mbappe",
            "title": "Viteză",
            "description": "Kylian Mbappe este un star tânăr în fotbal, cunoscut pentru viteza și agilitatea sa.",
            "data": "2024-08-13",
            "image": "https://cdn.pixabay.com/photo/2022/06/08/10/00/kylian-mbappe-7250181_1280.jpg",
            "category": "Atacant",
            "current_team": "Paris Saint-Germain"
        },
        {
            "id": 6,
            "name": "Mohamed Salah",
            "title": "Perseverență și Talent",
            "description": "Mohamed Salah a devenit unul dintre cei mai buni jucători din lume prin perseverența și talentul său.",
            "data": "2024-05-30",
            "image": "https://i.pinimg.com/originals/58/83/ab/5883ab7cb651a251b364c15609a81a4f.jpg",
            "category": "Atacant",
            "current_team": "Liverpool"
        },
        {
            "id": 7,
            "name": "Sergio Ramos",
            "title": "Apărare și Lider",
            "description": "Sergio Ramos este un apărător de top și un lider pe teren.",
            "data": "2024-08-01",
            "image": "https://w0.peakpx.com/wallpaper/40/165/HD-wallpaper-sergio-ramos-real-madrid-sergio-ramos-spain-thumbnail.jpg",
            "category": "Fundaș",
            "current_team": "Sevilla"
        },
        {
            "id": 8,
            "name": "Luka Modric",
            "title": "Mijlocaș și Viziune",
            "description": "Luka Modric este un mijlocaș excelent cunoscut pentru viziunea sa pe teren și abilitatea de a controla jocul.",
            "data": "2024-03-05",
            "image": "https://i.pinimg.com/originals/fe/4c/c3/fe4cc3021a48226100248c0acc7de29b.jpg",
            "category": "Mijlocaș",
            "current_team": "Real Madrid"
        },
        {
            "id": 9,
            "name": "Virgil van Dijk",
            "title": "Apărare și Forță",
            "description": "Virgil van Dijk este cunoscut pentru forța și abilitatea sa defensivă.",
            "data": "2024-01-01",
            "image": "https://i.pinimg.com/originals/c2/f6/43/c2f643949d8c40f6de68c8f829c79c6b.jpg",
            "category": "Fundaș",
            "current_team": "Liverpool"
        },
        {
            "id": 10,
            "name": "Kevin De Bruyne",
            "title": "Creativitate și Pasare",
            "description": "Kevin De Bruyne este un mijlocaș creativ, renumit pentru pasele și viziunea sa.",
            "data": "2024-10-17",
            "image": "https://i.pinimg.com/originals/5b/97/d1/5b97d1314acb51869e53a05700a9f3ff.jpg",
            "category": "Mijlocaș",
            "current_team": "Manchester City"
        },
        {
            "id": 11,
            "name": "Robert Lewandowski",
            "title": "Marcator și Tehnică",
            "description": "Robert Lewandowski este unul dintre cei mai buni atacanți din lume, cunoscut pentru tehnica și abilitatea sa de a marca.",
            "data": "2024-11-02",
            "image": "https://i.pinimg.com/originals/53/db/6b/53db6b5d4bd4808013321fb75e24c2d8.jpg",
            "category": "Atacant",
            "current_team": "Barcelona"
        },
        {
            "id": 12,
            "name": "Eden Hazard",
            "title": "Agilitate și Dribling",
            "description": "Eden Hazard este un jucător talentat cunoscut pentru agilitatea și driblingul său.",
            "data": "2024-05-09",
            "image": "https://i.pinimg.com/originals/f2/68/5b/f2685b0b031c611b9617d286419c533e.jpg",
            "category": "Atacant/Mijlocaș",
            "current_team": "Free Agent"
        },
        {
            "id": 13,
            "name": "Antoine Griezmann",
            "title": "Versatilitate și Tehnică",
            "description": "Antoine Griezmann este cunoscut pentru versatilitatea și tehnica sa pe teren.",
            "data": "2024-01-21",
            "image": "https://i.pinimg.com/originals/18/02/c8/1802c8850e309c889baf9283f7fbe4ac.jpg",
            "category": "Atacant/Mijlocaș",
            "current_team": "Atletico Madrid"
        },
        {
            "id": 14,
            "name": "Paulo Dybala",
            "title": "Creativitate și Viteză",
            "description": "Paulo Dybala este un jucător creativ și rapid.",
            "data": "2024-03-30",
            "image": "https://i.pinimg.com/originals/fb/38/c8/fb38c8ced0334593b05b4431b84214a4.jpg",
            "category": "Atacant/Mijlocaș",
            "current_team": "AS Roma"
        },
        {
            "id": 15,
            "name": "Sadio Mane",
            "title": "Viteză și Dribling",
            "description": "Sadio Mane este cunoscut pentru viteza și driblingul său impresionant.",
            "data": "2024-02-11",
            "image": "https://i.pinimg.com/originals/92/1c/3d/921c3d97ed11a6b0e3cf66dc9ce90c0a.jpg",
            "category": "Atacant",
            "current_team": "Al Nassr"
        },
        {
            "id": 16,
            "name": "Paul Pogba",
            "title": "Forță și Creativitate",
            "description": "Paul Pogba este un mijlocaș puternic și creativ.",
            "data": "2024-09-16",
            "image": "https://i.pinimg.com/originals/3b/db/c6/3bdbc655d31cd65d2dc01bdaee7f2ea2.jpg",
            "category": "Mijlocaș",
            "current_team": "Juventus"
        },
        {
            "id": 17,
            "name": "Romelu Lukaku",
            "title": "Forță și Goluri",
            "description": "Romelu Lukaku este cunoscut pentru forța și abilitatea sa de a marca goluri.",
            "data": "2024-08-19",
            "image": "https://i.pinimg.com/originals/95/59/2b/95592b0a0c90f692d8681a2e5f987b17.png",
            "category": "Atacant",
            "current_team": "AS Roma"
        },
        {
            "id": 18,
            "name": "Raheem Sterling",
            "title": "Viteză și Finalizare",
            "description": "Raheem Sterling este un jucător rapid și eficient în fața porții.",
            "data": "2024-07-11",
            "image": "https://i.pinimg.com/originals/6a/7b/96/6a7b96b42b6938833c89609edb051537.png",
            "category": "Atacant",
            "current_team": "Chelsea"
        },
        {
            "id": 19,
            "name": "Gareth Bale",
            "title": "Viteză și Tehnică",
            "description": "Gareth Bale este cunoscut pentru viteza și tehnica sa pe teren.",
            "data": "2024-12-20",
            "image": "https://i.pinimg.com/originals/4e/99/57/4e995732559455c4fd6881bcc8571bff.jpg",
            "category": "Atacant",
            "current_team": "Retired"
        },
        {
            "id": 20,
            "name": "Harry Kane",
            "title": "Finalizare și Tehnică",
            "description": "Harry Kane este un atacant remarcabil, cunoscut pentru finalizarea și tehnica sa.",
            "data": "2024-02-28",
            "image": "https://i.pinimg.com/originals/18/88/db/1888dbc341538dee07dcc25f2e64b1f1.jpg",
            "category": "Atacant",
            "current_team": "Bayern Munich"
        },
        {
            "id": 21,
            "name": "Luis Suarez",
            "title": "Aggresivitate și Goluri",
            "description": "Luis Suarez este cunoscut pentru agresivitatea și abilitatea sa de a marca goluri.",
            "data": "2024-01-21",
            "image": "https://i.pinimg.com/originals/d8/ba/f6/d8baf6b3e65282c42e1b23ccb174280c.jpg",
            "category": "Atacant",
            "current_team": "Gremio"
        },
        {
            "id": 22,
            "name": "Karim Benzema",
            "title": "Eleganță și Finalizare",
            "description": "Karim Benzema este cunoscut pentru eleganța și abilitatea sa de a finaliza.",
            "data": "2024-08-01",
            "image": "https://i.pinimg.com/originals/fd/12/8e/fd128ec9fcd389802dc620da58bb0932.jpg",
            "category": "Atacant",
            "current_team": "Al Ittihad"
        },
        {
            "id": 23,
            "name": "Toni Kroos",
            "title": "Control și Pasare",
            "description": "Toni Kroos este cunoscut pentru controlul său excelent al mingii și abilități de pasare.",
            "data": "2024-02-12",
            "image": "https://i.pinimg.com/originals/9f/13/20/9f13208c28e0ce2ca7382d3f3d9a4ca9.jpg",
            "category": "Mijlocaș",
            "current_team": "Real Madrid"
        },
        {
            "id": 24,
            "name": "N'Golo Kante",
            "title": "Muncă și Interceptare",
            "description": "N'Golo Kante este cunoscut pentru etica sa de muncă și abilitatea de a intercepta pasele adversarilor.",
            "data": "2024-08-19",
            "image": "https://i.pinimg.com/originals/c1/fe/b2/c1feb2206faa57dc40594cf3d42a46b0.jpg",
            "category": "Mijlocaș",
            "current_team": "Al Ittihad"
        },
        {
            "id": 25,
            "name": "Neymar Jr.",
            "title": "Tehnică și Viteză",
            "description": "Neymar Jr. este un jucător de fotbal remarcabil datorită tehnicii sale rafinate și vitezei sale extraordinare.",
            "data": "2024-08-11",
            "image": "https://cdn.pixabay.com/photo/2016/02/15/18/50/brazil-germany-1201762_960_720.jpg",
            "category": "Atacant",
            "current_team": "Al Hilal"
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
