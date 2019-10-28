import React from 'react';
import ProgressSkill from './ProgressSkill';

const skills = [
    {
        skill: 'php 7',
        progress: '70'
    },
    {
        skill: 'html',
        progress: '90'
    },
    {
        skill: 'css',
        progress: '80'
    },
    {
        skill: 'scsss/sass',
        progress: '60'
    },
    {
        skill: 'JavaScript',
        progress: '80'
    },
    {
        skill: 'jquery',
        progress: '50'
    },
    {
        skill: 'bootstrap',
        progress: '80'
    },
    {
        skill: 'symfony 4',
        progress: '90'
    },
    {
        skill: 'sql',
        progress: '70'
    },
    {
        skill: 'git',
        progress: '40'
    },
    {
        skill: 'scrum/agile',
        progress: '45'
    },
    {
        skill: 'doctrine',
        progress: '70'
    },
];

class Skill extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: skills,
        }
    };;


    // state = {
    //     skills: skills,
    // }

    render() {

        const listeSkill = Object.keys(skills).map((key, i) => (
            <ProgressSkill
                key={i}
                skill={skills[key].skill}
                progress={skills[key].progress}
            />
        ))

        return (
            <div className='row'>
                <h2 className='col-12 mt-3 mb-3'>{"compétence".toUpperCase()}</h2>
                {listeSkill}
            </div>
        )
    }
}

export default Skill;