// Marcelement General App

// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import posca from '../img/PoscaContainer.svg';
import pen from '../img/pen.svg';
import pen2 from '../img/pen2.svg';
import logo from '../img/logo.png';
import forest from '../img/forest.svg';
import grid from '../img/grid.png';
import attach from '../img/attach.svg';
import Login from './Login';
import tippex from '../img/tippex.svg';
import SignUpButton1 from '../img/SignUpButton1.svg';
import SignUpButton2 from '../img/SignUpButton2.svg';
import SignUpButton3 from '../img/SignUpButton3.svg';
import speakers from '../img/speakers.svg';
import marcel from '../img/marcel.svg';
import Cookies from 'js-cookie';

import '../App.css';



// App Components

class Home extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      user: Cookies.getJSON("user") || {},
    };
  }

  componentDidMount() {
    if (this.state.user.hasOwnProperty("token")){
      window.location = "/dashboard";
    }
  }

  render () {

    return (
      <HomeContainer>
         <LoginSection>
          <Title>
            <SubTitle>
              <SubTitleMaster>Pas encore inscrit ?</SubTitleMaster>

              <Link to="/signup">
                <SignUpButton></SignUpButton>
              </Link>

            </SubTitle>
          </Title>
          <Attach></Attach>
          <Speakers></Speakers>

          <Login></Login>
        </LoginSection>

        <PictureSection></PictureSection>

        <PoscaContainer></PoscaContainer>
        <PenContainer></PenContainer>
        <Pen2Container></Pen2Container>
        <TippExContainer></TippExContainer>
        <Marcel></Marcel>
      </HomeContainer>
    );
  }
}


// Style

const HomeContainer = styled.div`
  // background-color: red;
`

const Title = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  transition: all 1s;
  position: absolute;
  border: 4px solid #232131;
  border-radius: 5px;
  left: -450px;
  top: 4vw;
  height: 200px;
  width: 200px;
  text-align: center;
  font-size: 1.2rem;
  transform:  rotate(-13deg) translateY(6vw) scale(1.3);

  @media (max-width: 1200px) {
    left: -27vw;
    transform:  rotate(-13deg) translateY(6vw) scale(1.3);
  }

  @media (max-width: 1000px) {
    left: -22vw;
    top: 3vw;
    transform: rotate(-10deg) translateY(1vw) scale(1.2);
    height: 180px;
    width: 180px;
  }
  @media (max-width: 70px) {
    left: -15vw;
  }

  @media (max-width: 600px) {
    left: 22vw;
    transform: scale(0.8);
    transform:  rotate(-5deg) translateY(0vw) ;
    height: 150px;
    width: 150px;
  }
  
`

const SubTitle = styled.div`
  height: 100px;
  width: 280px;
  margin-left: -30%;
  background-color: white;
  position: absolute;
  bottom: -80px;
  transform: rotate(3deg);
  transition: 1s;
  border: 3px solid #232131;
  border-radius: 5px;
  background-image: url(${grid});
  background-size: 190%;
  box-shadow: 0px 0px 500px rgba(0,0,0,0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    transform: rotate(-3deg) scale(0.9);
    margin-left: -60vw;
    width: 30vw;
    margin-left: -40%;
    height: 80px;
    bottom: -70px;
    background-size: 300%;
    box-shadow: 0px 0px 500px lightgrey;
  }

  @media (max-width: 900px) {
    transform: rotate(-3deg) scale(0.9);
    margin-left: -40vw;
    width: 30vw;
    margin-left: 0%;
    height: 100px;
    bottom: -90px;
  }

  @media (max-width: 600px) {
    transform: rotate(5deg);
    height: 50px;
    bottom: -50px;
    width: 170%;
    margin-left: 2%;
    background-size: 200%;

  }
`

const SubTitleMaster = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  background-color: white;
  padding: 0px 2px;
`

const SignUpButton = styled.div`
  transition: all 0.6s;
  // background-color: white;
  // border: 3px solid #232131;
  height: 115px;
  width: 115px;
  // border-radius: 80px;
  position: absolute;
  right: -20px;
  bottom: -80px;
  transform: rotate(3deg);
  background-image: url(${SignUpButton2});
  filter: contrast(150%);
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-image: url(${SignUpButton1});
    filter: contrast(140%);
  }

  &:active {
    background-image: url(${SignUpButton3});
  }

  @media (max-width: 1000px) {
    right: 100px;
    bottom: -90px;
    height: 110px;
    width: 110px;
  }

  @media (max-width: 700px) {
    right: 40px;
    // bottom: -90px;
  }

  @media (max-width: 600px) {
    right: -5px;
    bottom: 40px;
    height: 110px;
    width: 110px;
    transform: rotate(6deg);
  }
`

const Attach = styled.div`
  // background-color: red;
  width: 120px;
  height: 60px;
  position: absolute;
  right: -14px;
  top: 30px;
  background-image: url(${attach});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 3;
`

const Speakers = styled.div`
  // background-color: red;
  transition: all 0.4s;
  width: 160px;
  height: 700px;
  position: absolute;
  right: -146px;
  top: 30px;
  background-image: url(${speakers});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  transform: rotate(-6deg);
  z-index: 2;

  @media (max-width: 1000px) {
    right: -124px;
    transform: rotate(-2deg);
  }

  @media (max-width: 600px) {
    right: -250px;
  }
`

const LoginSection = styled.div`
  transition: all 1s;
  background-color: white;
  border: 4px solid #232131;
  border-radius: 5px;
  z-index: 3;
  height: 500px;
  width: 400px;
  position: absolute;
  right: 150px;
  top: 70px;
  transform: rotate(10deg);

  @media (max-width: 1000px) {
    transform: rotate(8deg);
    top: 80px;
    right: 50px;
    width: 450px;
    height: 580px;
  }

  @media (max-width: 600px) {
    transform: rotate(2deg) scale(1.5);
    top: 150px;
  }

  @media (max-height: 500px) {
    // background-color: pink;
    width: 70%;
    height: 80vh;
  }
`

const PictureSection = styled.div`
  filter: contrast(90%);
  transition: all 0.6s;
  opacity: 0.5;
  width: 40%;
  height: 60%;
  position: absolute;
  bottom: 27vh;
  left: 22vw;
  background-image: url(${forest});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.2);
  z-index: 1;

  @media (max-width: 1150px) {
    left: 16vw;
    bottom: 24vh;
  }

  @media (max-width: 800px) {
    transform: scale(0) rotate(0deg);
    left: 25vw;
  }
`

const PoscaContainer = styled.div`
  background-image: url(${posca});
  background-repeat: no-repeat;
  height: 350px;
  top: 70px;
  width: 60px;
  // background-color: black;
  position: relative;
  transition: all 1.3s;
  left: -70px;
  z-index: 5;

  @media (max-width: 1000px) {
    top: 360px;
    left: 20px;
    transform: rotate(-15deg) scale(1.2);

  }
 
  @media (max-width: 650px) {
    left: 1000px;
    transform: scale(4) rotate(90deg) translateX(-200px);
  }
`

const PenContainer = styled.div`
  background-image: url(${pen});
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(-48deg);
  height: 400px;
  bottom: -70px;
  width: 24px;
  // background-color: black;
  position: relative;
  transition: all 1.3s;
  left: -20px;
  z-index: 5;

  @media (max-width: 1250px) {
    transform: rotate(-55deg) scale(1.2);
  }


  @media (max-width: 1100px) {
    transform: rotate(-35deg);
    left: -50px;

  }
 
  @media (max-width: 600px) {
    bottom: 200px;
    left: 10%;
    transform: rotate(-176deg) scale(1.3);
  }

  @media (max-width: 540px) {
    left: -100px;
  }
`

const Pen2Container = styled.div`
  background-image: url(${pen2});
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(-60deg) scale(1.05);
  height: 400px;
  position: absolute;
  width: 40px;
  top: -70px;
  right: -40px;

  @media (max-width: 1000px) {
    // left: -100px;
    transform: rotate(-60deg) scale(1.05);
    right: 0px;
    top: -100px;
  }

  @media (max-width: 800px) {
    // left: -100px;
    transform: rotate(-80deg) scale(1.05);
    right: 50px;
    top: -130px;
  }

  @media (max-width: 600px) {
    // left: -100px;
    transform: rotate(-110deg) scale(1.5);
    top: -200px;
  }

`


const TippExContainer = styled.div`
  background-image: url(${tippex});
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(10deg);
  height: 140px;
  bottom: 115px;
  width: 210px;
  position: relative;
  transition: all 1s;
  left: -180px;

  @media (max-width: 1250px) {
    left: -350px;
    bottom: 500px;
  }


  @media (max-width: 1000px) {
    left: -50px;
    bottom: 700px;
    transform: rotate(-40deg) scale(1.1);

  }
 
  @media (max-width: 750px) {
    left: -200px;
    bottom: 900px;
  }
 
  @media (max-width: 600px) {
    transform: rotate(360deg) scale(4);

  }

  @media (max-width: 540px) {

  }
`
const Marcel = styled.div`
  // background-color: green;
  filter: contrast(95%);
  height: 100px;
  width: 140px;
  position: absolute;
  bottom: 12vw;
  transition: all 1s;
  left: 25%;
  z-index: 4;
  background-image: url(${marcel});
  background-repeat: no-repeat;
  background-position: center;
  transform: scale(1.3);
  transition: all 1s;

  @media (max-width: 1150px) {
    bottom: 18vw;
    left: 15vw;
    transform: rotate(-6deg) scale(1.4);
  }

  @media (max-width: 800px) {
    bottom: 18vw;
    left: 12vw;
    transform: rotate(-6deg) scale(1.4);
  }
 
  @media (max-width: 600px) {
    bottom: 18vw;
    left: 12vw;
    transform: rotate(200deg) scale(3) translateY(-150px);
  }

  @media (max-height: 750px) {
    transform: scale(0);
    opacity: 0;
  }

`

// Export

export default Home;
