import React from 'react';

const projets = [
    {
        titre: "Projet de fin de formation: WowNews",
        content: 'Le but du site est de mettre en avant l’actualité du jeu World of Warcraft et de pouvoir créer des articles orientés sur le développement et l’explication de l’univers. Il est nécessaire de permettre à la communauté de commenter les articles afin de favoriser les échanges et son développement.',
        date: '08/2018',
        lien: [
            {
                nom: 'site',
                url: 'http://wownews.sicot-development.fr',
            },
            {
                nom: 'dossier technique',
                url: 'http://wownews.sicot-development.fr/dovPdf/dossierTecniqueWowNews.pdf',
            },
            {
                nom: 'Github',
                url: 'https://github.com/sicotjeanvivien/WowNewsV1.1',
            },
        ]
    },
    {
        titre: 'BirdCoin',
        content: "Développement d'un jeu en javascript. Le but est d'avoir un sprite d'oiseau qui attrape des coin qui défilent de la droit vers la gauche.",
        date: '09/2018',
        lien: [
            {
                nom: 'BirdCoin',
                url: 'href="http://javascriptbasic.sicot-development.fr/birdCoin.html'
            }
        ]
    },
    {
        titre: '',
        content: '',
        date: '',
        lien: [
            {
                nom: '',
                url: ''
            }
        ]
    },
]


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projets: projets
        }
    };;


    // state = {
    //     projets: projets
    // }

    render() {

        const listeProjet = Object.keys(projets).map((key,i)=>(
            <div key={i}>
                jghg
            </div>
        ))

        return (
            <div>
                <h2>Projet</h2>

                {listeProjet}
            </div>
        )
    }
}

export default Project;


