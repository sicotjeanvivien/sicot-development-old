import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Accueil from './components/Accueil';
import Experience from './components/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';


class App extends React.Component {
  render() {

    return (
      <React.Fragment>

        <Header />

        <Router>
          <div className=''>
            <nav className='navbar container-fluid navbar-expand-lg navbar-dark'>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link to="/" className='nav-link'><strong>Accueil</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/experience" className='nav-link'><strong>Expériences</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/competence" className='nav-link'><strong>Compétences</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/contact" className='nav-link'><strong>Contact</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/projet' className='nav-link'><strong>Projet</strong></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='container mt-5 mb-5'>
            <Route exact path="/" component={Accueil} />
            <Route path="/competence" component={Skill} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/projet" component={Project} />
          </div>
        </Router>

        <Footer />

      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default App;