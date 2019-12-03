import React from "react";
import Hobby from "./Hobby";

// import drone from '../assets/drone.jpg'
import Formation from "./Formation";

const blog = [
    {
        titre:'titre1',
        contenue: 'Nulla Lorem occaecat fugiat minim est ad. Ipsum voluptate nulla quis cillum non irure dolor id minim exercitation ad in ullamco do. Sit ullamco ex ad aliqua ipsum deserunt officia non consequat adipisicing minim veniam. Eiusmod ullamco irure veniam ad. Eiusmod eiusmod reprehenderit ipsum sunt magna magna do aliqua ex esse cupidatat consectetur qui. Nisi nisi incididunt deserunt mollit consectetur excepteur. Sint sunt deserunt dolor aliquip id velit enim est officia amet. Dolore culpa cillum commodo adipisicing culpa. Magna deserunt ex tempor laborum laborum sint velit deserunt eiusmod esse non aliqua ea aute. Non Lorem eiusmod nostrud reprehenderit tempor velit velit sit velit et ad cillum elit quis. Dolor velit et consectetur magna. Dolor tempor qui do qui culpa amet.Consequat id velit laboris est exercitation. Velit do laborum officia qui in ea consectetur voluptate officia ullamco sint. Veniam commodo enim consectetur aute consequat. Labore excepteur nulla cupidatat reprehenderit. Cillum exercitation veniam ut mollit esse velit est. Culpa sunt tempor adipisicing id sit non tempor laboris elit. Excepteur et cillum mollit aliqua duis elit fugiat do sit.',
        img: [
            'link1'
        ],
        comments:{
            authors: 'autheur',
            message: 'Voluptate eiusmod aute mollit sint cillum.',
            date: '16/04/2020',
        }
    },
    {
        titre:'titre2',
        contenue: 'Nulla Lorem occaecat fugiat minim est ad. Ipsum voluptate nulla quis cillum non irure dolor id minim exercitation ad in ullamco do. Sit ullamco ex ad aliqua ipsum deserunt officia non consequat adipisicing minim veniam. Eiusmod ullamco irure veniam ad. Eiusmod eiusmod reprehenderit ipsum sunt magna magna do aliqua ex esse cupidatat consectetur qui. Nisi nisi incididunt deserunt mollit consectetur excepteur. Sint sunt deserunt dolor aliquip id velit enim est officia amet. Dolore culpa cillum commodo adipisicing culpa. Magna deserunt ex tempor laborum laborum sint velit deserunt eiusmod esse non aliqua ea aute. Non Lorem eiusmod nostrud reprehenderit tempor velit velit sit velit et ad cillum elit quis. Dolor velit et consectetur magna. Dolor tempor qui do qui culpa amet.Consequat id velit laboris est exercitation. Velit do laborum officia qui in ea consectetur voluptate officia ullamco sint. Veniam commodo enim consectetur aute consequat. Labore excepteur nulla cupidatat reprehenderit. Cillum exercitation veniam ut mollit esse velit est. Culpa sunt tempor adipisicing id sit non tempor laboris elit. Excepteur et cillum mollit aliqua duis elit fugiat do sit.',
        img: [
            'link1'
        ],
        comments:{
            authors: 'autheur',
            message: 'Voluptate eiusmod aute mollit sint cillum.',
            date: '16/04/2020',
        }
    }
]
class Accueil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };;
    }


    // state = {
    //     hobby: hobby,
    //     formation: formation
    // };

    render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-2'>s</div>
                    <div className='col-8 border-right border-left'>s</div>
                    <div className='col-2'>s</div>
                </div>

            </React.Fragment>
        )
    }
}

export default Accueil;