import React from 'react';

class Hobby extends React.Component {
    render() {
        return (
            <div className='col-12 pb-3'>
                <strong>{this.props.name.toUpperCase()}: </strong> 
                {this.props.content}
            </div>
        )
    }
}

export default Hobby;