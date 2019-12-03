import React from 'react';

class Job extends React.Component {
    // const experience = props.experience
    render() {

        const listeTask = this.props.task.map((task, i) => (
            <li key={i}>
                {task}
            </li>
        ));

        const listeTech = this.props.tech.map((tech, i) => (
            <div key={i} className='col-2 border m-1'>
                {tech}
            </div>
        ))

        const tech = (
            listeTech.length > 0 ?
                <div className=''>
                    <h6>Techonologie: </h6>
                    <div className='row'>
                        {listeTech}
                    </div>
                </div>
                :
                ''
        )

        return (
            <div className='row col-12 shadow p-3 mb-5' >
                <div className='col-2'>{this.props.time}</div>
                <div className='col-10'>
                    <h5>
                        <strong>{this.props.job.toUpperCase()}</strong>
                    </h5>
                    <div className='row'>
                        <h6>Responsabilités:</h6>
                        <ul>
                            {listeTask}
                        </ul>
                    </div>
                    
                {tech}
                </div>
            </div>
        )
    }
}
export default Job;