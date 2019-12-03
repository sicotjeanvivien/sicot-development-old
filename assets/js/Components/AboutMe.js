import React from "react";
import Hobby from "./Hobby";

// import drone from '../assets/drone.jpg';
import code from '../assets/code.jpg';
import blockchain from '../assets/blockchain.jpg';
import higthtech from '../assets/giphy.gif';
import css from '../assets/css.png';
import html from '../assets/html.png';
import bootstrap from '../assets/bootstrap-logo.png';
import sql from '../assets/sql.png';
import php from '../assets/logo-php.png';
import reactlogo from '../assets/react.png';
import symfony from '../assets/symfony_logo.png';
import javascript from '../assets/javascript-logo.png';
import jquery from '../assets/jquery.png';
import Formation from "./Formation";



const hobby = [
    {
        name: 'bitcoin-blockchain',
        content: "cette technologie permet de redéfinir les échanges de valeur entre individu. Ces nouvelles monnaies sont  rapide, sécurisé et décentralisé. Les plus grandes société de l'informatique s'y interesent tel que facebook, IBM,...  "
    },
    {
        name: "robotique",
        content: "De plus en plus notre monde s'automatise. Gain de temps, de précision. Remplace les hommes et les femmes dans les métiers dangereux et répétitif "
    },
    {
        name: "arduno-rasberry",
        content: "Circuit imprimé à bas prix permettant à tous de se lancer dans la domotique, DIY, robotique, conception de borne d'arcane. "
    },
    {
        name: "la science",
        content: "La découverte et la compréhension de notre nomde. Les nouvelles découvertes en astronomie et physique. La biologie pour explorer le nonde animal et végétal.",
    },
    {
        name: "développement",
        content: "La création de nouveau logiciel, site internet, application ou jeux video. La mise en place d'une solution à une problèmatique, besoin, envie,...",
    },
    {
        name: "histoire",
        content: "L'étude des civilisations antiques, de notre passé.",
    },


]

const formation = [
    {
        titre: "Développeur logiciel RNCP niveau III (Bac+2)",
        content: "titre professsionel"
    },
    {
        titre: "Formation développeur full stack (Symfony)",
        content: "centre dde formation 'la Piscine' à Talence"
    },
    {
        titre: "Opquasct: certificat Qualité Web",
        content: "certification indépendant sur les bonnes pratiques (UX- UI)"
    },
]

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hobby: hobby,
            formation: formation
        };;
    }


    // state = {
    //     hobby: hobby,
    //     formation: formation
    // };

    render() {

        const listHobby = Object.keys(hobby).map((key, i) => (
            <Hobby
                key={i}
                name={this.state.hobby[key].name}
                content={this.state.hobby[key].content}
            />
        ));

        const listFormation = Object.keys(formation).map((key, i) => (
            <Formation
                key={i}
                titre={this.state.formation[key].titre}
                content={this.state.formation[key].content}
            />
        ))

        return (
            <React.Fragment>

                <div className='row mt-5 shadow p-3 mb-5'>
                    <p className="lead">
                        Mon expérience professionnelle au sein de l'armée de terre m'a permis d'acquérir responsabilité, rigueur, autonomie, persévérance afin d'accomplir dans des conditions extrêmes mon travail. Passionné d'informatique et de nouvelles technologies, je cherche à développer mes compétences et à relever des défis.
                    </p>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <div className='p-3 bg-primary'>
                            <img src={code} className='rounded mx-auto d-block img-fluid'></img>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='p-3 bg-primary'>

                            <img src={blockchain} className='rounded mx-auto d-block img-fluid'></img>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='p-3 bg-primary'>

                            <img src={higthtech} className='rounded mx-auto d-block img-fluid'></img>
                        </div>
                    </div>

                </div>
                <div className='row mt-4 shadow p-3 mb-5'>
                    <h4 className='mb-3'>Formation:</h4>
                    {listFormation}
                </div>
                <div className='row mt-5 shadow p-3 mb-5'>
                    <h4 className='mb-5 col-12'>Language et technologie connu:</h4>
                    <div className='col-1 '>
                        <img src={html} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={css} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={bootstrap} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={sql} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={php} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={symfony} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={reactlogo} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={javascript} className=' mx-auto d-block img-fluid'></img>
                    </div>
                    <div className='col-1 '>
                        <img src={jquery} className=' mx-auto d-block img-fluid'></img>
                    </div>
                </div>
                <div className='row mt-4 shadow p-3 mb-5'>
                    <h4 className='mb-3'>Mes centres d'intérêt:</h4>
                    {listHobby}
                </div>
            </React.Fragment>
        )
    }
}

export default AboutMe;