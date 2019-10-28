import React from 'react';

function Footer() {
    return (
        <footer className='container-fluid footer'>
            <div className='row p-2'>
                <div className='offset-2 col-4'>
                    <h6>Contact:</h6>
                    <ul className=''>
                        <li>tel: 07.62.97.11.67</li>
                        <li>email: jeanvivien.sicot@lapiscine.pro</li>
                        <li>adresse: 1 Avenue Pierre Proudhon 33140 Villenave-d'Ornon</li>
                    </ul>
                </div>
                <div className='col-4 border-left border-white'>
                    <h6>lien utile:</h6>
                    <ul className=''>
                        <li className=''>
                            <a href='https://brave.com/' className='text-reset'><strong>Brave</strong></a>: navigateur web le plus rapide
                        </li>
                        <li className=''>
                            <a href='http://javascriptbasic.sicot-development.fr/birdCoin.html' className='text-reset'><strong>BrirdCoin</strong></a>: petit jeu
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='row'>
                <p>site développé en react</p>
            </div> */}
        </footer>
    )
}

export default Footer;