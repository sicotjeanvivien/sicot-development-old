import React from "react";
import Job from "./Job";
import Skill from "./Skill";

const experiences = [
    {
        time: "11/2018-05/2019",
        job: "développeur d'application Web",
        tech: ['php 7', 'symfony 4', 'twig', 'doctrine', 'mySQL', 'phpMyAdmin', 'javascript', 'jquery', 'pluging datatable', 'HTML', 'CSS', 'SASS', 'Bootstrap 4', 'git', 'commande Linux'
        ],
        task: [
            "developpement appliction de gestion de stocke",
            "administration réseau",
            "création de WebService",
            "conception et création d'une base de données",
            "importation dans la base de données d'un fichier csv",
            "déploiment serveur",
            "administration serveur",
            "mise en place de fonctionnalitées dynamiques adapté aux clients",
            "gestion utilisateur",
            "gestion email",
            "gestion CRUD en ajax",
            "gestion de projet en agile via Jira software",
            "conception et Développement d'interfaces et de fonctionnalités",
            "maintenance et évolutions",
            "testing automatisé",
            "veille technologique",
        ]
    },
    {
        time: "août-septembre 2018",
        job: "conception et développement d'un blog",
        tech: ['php 7', 'symfony 3.4', 'twig', 'doctrine', 'mySQL', 'phpMyAdmin', 'HTML', 'CSS', 'SASS', 'Bootstrap 4', 'git'],
        task: [
            "conception et mise en place de la base de données",
            "conception et développement d'interfaces et de fonctionnalités",
            "conception charte graphique",
            "maquetter une application",
            "développer une interface utilisateur",
            "Développer une application simple de mobilité numérique",
        ]
    },
    {
        time: "2018-2019",
        job: "apprentissage autodidacte",
        tech: [],
        task: [
            "découverte React.js (tutoriel officiel, Udemy)",
            "découverte TypeScript, FireBase",
            "apprentissage JavaScript (W3schools.com, developer.mozilla.org)",
            "apprentissage HTML/CSS via codeCademy",
        ]
    },
    {
        time: "2014-2017",
        job: "oppérateur transmission ",
        tech: [],
        task: [
            "transmetteur",
            "sapeur de combat",
            "responsable transmission",
            "démineur",
            "rigueur",
            "discipline",
            "travail de groupe"
        ]
    },

];


class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: experiences
        }
    };;


    // state = {
    //     experiences: experiences
    // }

    render() {

        const listeExp = Object.keys(experiences)
            .map((experience, i) => (
                <Job
                    key={i}
                    time={experiences[experience].time}
                    job={experiences[experience].job}
                    task={experiences[experience].task}
                    tech={experiences[experience].tech}
                />
            ))

        return (
            <React.Fragment>
            <div className='row'>
                <h2 className='col-12 mt-3 mb-3'>{"expérience".toUpperCase()}</h2>
                {listeExp}
            </div>
            <Skill/>
            </ React.Fragment>
        )
    }
}

export default Experience;