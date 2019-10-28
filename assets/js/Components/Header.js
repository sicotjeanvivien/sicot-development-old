import React from 'react';
import jvs from '../assets/jvs.jpg';

function Header() {
    return (
        <header className='container-fluid header'>
            <div className='row pt-2'>
                <img src={jvs} className='rounded-circle mx-auto d-block img-fluid'></img>
                <h1 className='col-12'>Jean Vivien Sicot</h1>
                <h2 className='col-12'><strong>Développeur d'application Web</strong></h2>
                <div className='col-12 m-2'>
                <a href='http://sicot-development.fr/docPdf/cvJVSicotJuin2019.pdf'><button className='btn btn-info'>Télécharger le CV</button></a>

                </div>
            </div>
        </header>
    )
}

export default Header;