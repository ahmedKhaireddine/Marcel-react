// Marcelement General App

// Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import styled from 'styled-components';
import background from './img/background.png';
import colors from './img/ColorsContainer.svg';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Exercice from './components/Exercice';
import Contact from './components/Contact';
import Journal from './components/Journal';
import Stats from './components/Stats';
import grid from './img/grid.png';
import cookies from 'js-cookie';
import Api from './utils/Api';
import './App.css';
import RespirationContainer from './components/RespirationContainer';



// App Components

class App extends React.Component {

  componentWillMount() {
    const user = cookies.getJSON("user");
    if (user) {
      Api.setUser(user);
    }
  }

  render () {



    return (
      <AppContainer>
        <Router>

          <PaperContainer>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/stats" component={Stats} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/journal" component={Journal} />
                  <Route path= '/respiration' exact component={RespirationContainer}/>
                  <Route path= '/exercises/:id' exact component={Exercice}/>
                </Switch>
          </PaperContainer>

          <Link to="/contact">
            <ContactContainer>
                <ColorsContainer>
                  Contactez-nous !
                </ColorsContainer>
            </ContactContainer>
          </Link>

          </Router>
      </AppContainer>
    );
  }
}



// Style

const AppContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  // height: 100vh;
  transform: scale(1.015) rotate(0.5deg);
  over-flow: hidden;
  transition: all 1s;
  overflow-y: scroll;
  overflow-x: hidden;
`

const PaperContainer = styled.div`
  background-image: url(${grid});
  background-size: 100%;
  transition: all 0.5s;
  background-color: white;
  border: 4px solid #232131;
  border-radius: 5px;
  width: 80%;
  max-width: 1000px;
  margin: auto;
  height: 85vh;
  box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
  transition: all 1s;
  // position: relative;


  @media (max-width: 1000px) {
    width: 90%;
    height: 90vh;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    box-shadow: 2px 2px 100px rgba(0,0,0,0.3);
    transform: scale(1.04);
  }

  @media (max-height: 700px) {
    height: 120vh;
    // transform: scale(0.76);
  }
`

const ContactContainer = styled.div`
  // background-color: red;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  transition: all 0.7s;

  &:hover {
    transform: scale(1.1) translateY(-10px);
  }

  @media (max-width: 1000px) {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    margin-top: -100px;
  }

  @media (max-height: 750px) {
    // margin-top: 20px;
  }
`

const ColorsContainer = styled.div`
  z-index: 4;
  transition: all 1.5s;
  background-image: url(${colors});
  background-repeat: no-repeat;
  // background-color: #4ab0e8;
  height: 50px;
  width: 400px;
  margin-right: 30%;
  color: #232131;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 0.9rem;
  padding-top: 1px;
  transform: scale(1.2) rotate(-5deg) translateY(10px);

  @media (max-width: 1000px) {
    margin-right: 10%;
    transform: scale(1.1) rotate(0deg) translateY(0px);
  }

  @media (max-height: 600px) {
    // transform: scale(0.9);
    // margin-top: -80px;
  }

  @media (max-width: 600px) {
    transform: scale(1.4) rotate(2deg) translateY(25px);
    margin-right: 0%;
    margin-top: -10px;
  }
`


// Export

export default App;
