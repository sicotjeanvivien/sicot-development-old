import React from 'react';

class Formation extends React.Component{
    render(){
        return (
            <div className='col-12 pb-3'>
                <strong>{this.props.titre}: </strong>
                {this.props.content}
            </div>
        )
    }
}

export default Formation;