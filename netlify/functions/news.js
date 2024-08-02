const express = require('express');
const path = require('path');
const fs = require('fs');


const cors = require('cors')
app.use(cors())

const app = express();

exports.handler = async function(event, context) {
    const playersData = [
        {
            "id": 1,
            "name": "Cristiano Ronaldo",
            "title": "Goluri și Realizări",
            "description": "Cristiano Ronaldo este cunoscut pentru abilitatea sa incredibilă de a marca goluri și pentru realizările sale impresionante în fotbal.",
            "data": "2024-08-01",
            "imagine": "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg"
        },
        {
            "id": 2,
            "name": "Lionel Messi",
            "title": "Dribling și Creativitate",
            "description": "Lionel Messi este recunoscut pentru driblingul său excelent și creativitatea sa pe teren.",
            "data": "2024-08-01",
            "imagine": "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg"
        },
        {
            "id": 3,
            "name": "Neymar Jr.",
            "title": "Tehnică și Viteză",
            "description": "Neymar Jr. este un jucător de fotbal remarcabil datorită tehnicii sale rafinate și vitezei sale extraordinare.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/neymar_jr.jpg"
        },
        {
            "id": 4,
            "name": "Kylian Mbappe",
            "title": "Tineret și Viteză",
            "description": "Kylian Mbappe este un star tânăr în fotbal, cunoscut pentru viteza și agilitatea sa.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/kylian_mbappe.jpg"
        },
        {
            "id": 5,
            "name": "Mohamed Salah",
            "title": "Perseverență și Talent",
            "description": "Mohamed Salah a devenit unul dintre cei mai buni jucători din lume prin perseverența și talentul său.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/mohamed_salah.jpg"
        },
        {
            "id": 6,
            "name": "Sergio Ramos",
            "title": "Apărare și Lider",
            "description": "Sergio Ramos este un apărător de top și un lider pe teren.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/sergio_ramos.jpg"
        },
        {
            "id": 7,
            "name": "Luka Modric",
            "title": "Mijlocaș și Viziune",
            "description": "Luka Modric este un mijlocaș excelent cunoscut pentru viziunea sa pe teren și abilitatea de a controla jocul.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/luka_modric.jpg"
        },
        {
            "id": 8,
            "name": "Virgil van Dijk",
            "title": "Apărare și Forță",
            "description": "Virgil van Dijk este cunoscut pentru forța și abilitatea sa defensivă.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/virgil_van_dijk.jpg"
        },
        {
            "id": 9,
            "name": "Kevin De Bruyne",
            "title": "Creativitate și Pasare",
            "description": "Kevin De Bruyne este un mijlocaș creativ, renumit pentru pasele și viziunea sa.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/kevin_de_bruyne.jpg"
        },
        {
            "id": 10,
            "name": "Robert Lewandowski",
            "title": "Marcator și Tehnică",
            "description": "Robert Lewandowski este unul dintre cei mai buni atacanți din lume, cunoscut pentru tehnica și abilitatea sa de a marca.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/robert_lewandowski.jpg"
        },
        {
            "id": 11,
            "name": "Eden Hazard",
            "title": "Agilitate și Dribling",
            "description": "Eden Hazard este un jucător talentat cunoscut pentru agilitatea și driblingul său.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/eden_hazard.jpg"
        },
        {
            "id": 12,
            "name": "Antoine Griezmann",
            "title": "Versatilitate și Tehnică",
            "description": "Antoine Griezmann este cunoscut pentru versatilitatea și tehnica sa pe teren.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/antoine_griezmann.jpg"
        },
        {
            "id": 13,
            "name": "Paulo Dybala",
            "title": "Creativitate și Viteză",
            "description": "Paulo Dybala este un jucător creativ și rapid.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/paulo_dybala.jpg"
        },
        {
            "id": 14,
            "name": "Sadio Mane",
            "title": "Viteză și Dribling",
            "description": "Sadio Mane este cunoscut pentru viteza și driblingul său impresionant.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/sadio_mane.jpg"
        },
        {
            "id": 15,
            "name": "Paul Pogba",
            "title": "Forță și Creativitate",
            "description": "Paul Pogba este un mijlocaș puternic și creativ.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/paul_pogba.jpg"
        },
        {
            "id": 16,
            "name": "Romelu Lukaku",
            "title": "Forță și Goluri",
            "description": "Romelu Lukaku este cunoscut pentru forța și abilitatea sa de a marca goluri.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/romelu_lukaku.jpg"
        },
        {
            "id": 17,
            "name": "Raheem Sterling",
            "title": "Viteză și Finalizare",
            "description": "Raheem Sterling este un jucător rapid și eficient în fața porții.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/raheem_sterling.jpg"
        },
        {
            "id": 18,
            "name": "Gareth Bale",
            "title": "Viteză și Tehnică",
            "description": "Gareth Bale este cunoscut pentru viteza și tehnica sa pe teren.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/gareth_bale.jpg"
        },
        {
            "id": 19,
            "name": "Harry Kane",
            "title": "Finalizare și Tehnică",
            "description": "Harry Kane este un atacant remarcabil, cunoscut pentru finalizarea și tehnica sa.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/harry_kane.jpg"
        },
        {
            "id": 20,
            "name": "Luis Suarez",
            "title": "Aggresivitate și Goluri",
            "description": "Luis Suarez este cunoscut pentru agresivitatea și abilitatea sa de a marca goluri.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/luis_suarez.jpg"
        },
        {
            "id": 21,
            "name": "Karim Benzema",
            "title": "Eleganță și Finalizare",
            "description": "Karim Benzema este cunoscut pentru eleganța și abilitatea sa de a finaliza.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/karim_benzema.jpg"
        },
        {
            "id": 22,
            "name": "Toni Kroos",
            "title": "Control și Pasare",
            "description": "Toni Kroos este cunoscut pentru controlul său excelent al mingii și abilități de pasare.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/toni_kroos.jpg"
        },
        {
            "id": 23,
            "name": "N'Golo Kante",
            "title": "Muncă și Interceptare",
            "description": "N'Golo Kante este cunoscut pentru etica sa de muncă și abilitatea de a intercepta pasele adversarilor.",
            "data": "2024-08-01",
            "imagine": "https://example.com/images/ngolo_kante.jpg"
        }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(playersData),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};