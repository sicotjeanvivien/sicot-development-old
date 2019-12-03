import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Accueil from './components/Accueil';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import Login from './Components/Login';


class App extends React.Component {
  render() {

    return (
      <React.Fragment>

        <Header />

        <Router>
          <div>
            <nav className='navbar container-fluid navbar-expand-lg navbar-dark'>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link to="/" className='nav-link'><strong>Accueil</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/AboutMe" className='nav-link'><strong>Qui suis-je?</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/experience" className='nav-link'><strong>Expériences</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/projet' className='nav-link'><strong>Projet</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/contact" className='nav-link'><strong>Contact</strong></Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/login' className='nav-link'></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='container mt-5 mb-5'>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/projet" component={Project} />
            <Route path="/login" component={Login} />
          </div>
        </Router>


        <Footer />

      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default App;