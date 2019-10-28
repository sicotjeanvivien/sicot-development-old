import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className='row'>
                <h2 className='col-12 mt-3 mb-3'>{"contact".toUpperCase()}</h2>
                <div className='col-12 shadow p-3 mb-5'>
                    <ul className=''>
                        <li>tel: 07.62.97.11.67</li>
                        <li>email: jeanvivien.sicot@lapiscine.pro</li>
                        <li>adresse: 1 Avenue Pierre Proudhon 33140 Villenave-d'Ornon</li>
                    </ul>
                </div>
                <div className='col-12 shadow p-3 mb-5'>
                    <h5>Réseau social</h5>
                    <ul>
                        <li>
                            <a href='https://www.linkedin.com/in/jean-vivien-sicot-6a3523162/' className='stretched-link text-reset'>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;