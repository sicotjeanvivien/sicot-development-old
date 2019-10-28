import React from 'react';

class ProgressSkill extends React.Component {
    render() {
        const progress = this.props.progress;

        let colorbg = '';

        if (progress < 25) {
            colorbg = '#dc3545';
        } else if (progress < 50) {
            colorbg = '#ffc107'
        } else if (progress < 75) {
            colorbg = '#17a2b8'
        } else if (progress > 74) {
            colorbg = '#28a745'
        }

        const styleCSS = {
            width: this.props.progress + '%',
            backgroundColor: colorbg,
        }


        return (
            <div className='col-12 mb-3'>
                <h6 className=''>{this.props.skill.toUpperCase()}</h6>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={styleCSS} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

export default ProgressSkill;