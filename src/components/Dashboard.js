import React from 'react';
import styled from 'styled-components';
import DayDisplay from './core/Dashboard/DayDisplay';
import { Link } from 'react-router-dom';
import logo from '../img/logo_flat.svg';
import LogoutButton from './core/LogoutButton';
import StatisticButton from './core/Dashboard/StatisticButton';
import ExerciceButton from './core/Dashboard/ExerciceButton';
import smileyHappy from '../img/smiley-happy.svg';
import smileyRegular from '../img/smiley-regular.svg';
import smileySad from '../img/smiley-sad.svg';
import speakers from '../img/speakers.svg';
import rainbow from '../img/rainbow.svg';
import cloud from '../img/cloud3.svg';
import cloudBG from '../img/cloud4.svg';
import dots from '../img/dotsRed.svg';
import Api from '../utils/Api';
import Cookies from 'js-cookie';
import moment from 'moment';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClickedSmiley: false,
      isSelectedSmileyHappy: false,
      isSelectedSmileyRegular: false,
      isSelectedSmileySad: false,
      user: Cookies.getJSON("user") || {},
      getMood: false,
    }
  }

  componentDidMount() {
    console.log('coucou');
    Api.getMoodByDate(this.state.user._id, moment().format('DD-MM-YYYY'))
      .then(data => {
        console.log('data', data)
        if(data.Moods !== null){
          this.setState({
            getMood: true
          })
        }
      })
  }

  saveTemper(mood) {
    const object = {
      mood : mood,
      user : this.state.user._id,
      date : moment().format('DD-MM-YYYY'),
    }
    console.log('Dashboard#object', object);
    Api.saveMood(object)
    .then(data => {
      console.log('Dashboard#data', data);
    })
  }

  render () {
  console.log('GetMood', this.state.getMood);
  // MODAL START
  let Modal = <div></div> 

  if(this.state.getMood === false) {
    Modal = 
    <ModalContainer
      style={{
        transform:
        this.state.isClickedSmiley ?
        'scale(0)' : 'scale(1)',
        opacity:
        this.state.isClickedSmiley ?
        '0' : '1',
        borderRadius:
        this.state.isClickedSmiley ?
        '1000px' : '0px',
      }}>
      <ModalContainerLogo>
        <LogoFlat></LogoFlat>
        Club Marcel 
      </ModalContainerLogo>
      <ModalContainerTitle>Bienvenue sur ton espace personnel !</ModalContainerTitle>
      <ModalContainerSubTitle>Comment s'est déroulée ta journée ?</ModalContainerSubTitle>
      <ModalContainerSmiley>

        <SmileyContainer
          style={{ backgroundImage: `url(${smileySad})` }}
          onClick={() => {
            this.setState({
            isClickedSmiley: !this.state.isClickedSmiley,
            isSelectedSmileySad: true,
            });
            this.saveTemper('sad')
          }}
        ></SmileyContainer>

        <SmileyContainer
          style={{ backgroundImage: `url(${smileyRegular})` }}
          onClick={() => {this.setState({
            isClickedSmiley: !this.state.isClickedSmiley,
            isSelectedSmileyRegular: true,
          });
          this.saveTemper('regular')            
          }}
        ></SmileyContainer>

        <SmileyContainer
          style={{ backgroundImage: `url(${smileyHappy})` }}
          onClick={() => {this.setState({
            isClickedSmiley: !this.state.isClickedSmiley,
            isSelectedSmileyHappy: true,
          });
          this.saveTemper('happy')            
          }}
        ></SmileyContainer>

      </ModalContainerSmiley>
    </ModalContainer>;
  }
   

      let MoodDisplay = '';
        
      if(this.state.isSelectedSmileyHappy === true || this.state.getMood === true) {
        MoodDisplay = 
          <Mood
            style={{ 
              backgroundImage: `url(${smileyHappy})`,
              backgroundColor: '#8be09a',
            }}
          >
            <HappyDecoration></HappyDecoration>
          </Mood>
      } else if(this.state.isSelectedSmileyRegular === true) {
        MoodDisplay = 
          <Mood
            style={{ 
              backgroundImage: `url(${smileyRegular})`,
              backgroundColor: '#efd853',
            }}
          >
            <Link 
              to="/stats"
              style={{
                margin: '50px 0px 0px 50px',
              }}
            >
              <RegularDecoration>Découvre tes statistiques et motive toi !</RegularDecoration>
            </Link>
          </Mood>
      } else if(this.state.isSelectedSmileySad === true) {
        MoodDisplay = 
          <Mood
            style={{ 
              backgroundImage: `url(${smileySad})`,
              backgroundColor: '#e8717f',
            }}
          >
          <Link 
              to="/respiration"
              style={{
                margin: '50px 0px 0px 50px',
              }}
            >
            <SadDecoration>Besoin de te relaxer ?</SadDecoration>
            </Link>
          </Mood>
    }
  // MODAL END
    return (
      <div>

        { Modal }

        <DashboardContainer
          // style= {{
          //   filter:
          //   this.state.isClickedSmiley ?
          //   'blur(0px)' : 'blur(4px)',
          // }}
        >
          
          {MoodDisplay}

          <Speakers></Speakers>   

          <LogoutButton></LogoutButton>

          {/* <h1  style={{marginLeft: 50}}>Journal de l'enfant</h1> */}

          <Link
            to="/journal"
          >
            <DayDisplay name={this.state.user.username}></DayDisplay>
          </Link>


          <ButtonDisplay>
            <Link 
              to="/stats"
              style={{
                margin: '50px 0px 0px 50px',
              }}
            >
              <StatisticButton></StatisticButton>
            </Link>

            <Link 
              to="/respiration"
              style={{
                margin: '50px 0px 0px 50px',
              }}
            >
              <ExerciceButton></ExerciceButton>
            </Link>
          </ButtonDisplay>

        </DashboardContainer>
      </div>
    );
  }
}

// Style

  const 
    Mood = styled.div`
      transition: 1s all;
      position: absolute;
      height: 100px;
      width: 130px;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 4px;
      border: 4px #373731 solid;
      z-index: 10;
      transform: rotate(-10deg);
  
      @media (max-width: 600px) {
        top: -30px;
        left: -40px;
      }
    `,
    HappyDecoration = styled.div`
      height: 120px;
      width: 180px;
      background-image: url(${rainbow});
      background-repeat: no-repeat;
      position: absolute;
      bottom: -100px;
      right: -80px;
      transform: rotate(10deg);
  
      @media (max-width: 600px) {
        transform: scale(1.2) rotate(10deg);
        bottom: -240px;
        right: 45px;
      }
    `,
    RegularDecoration = styled.div`
      height: 120px;
      transition: all 0.6s;
      width: 140px;
      background-image: url(${dots});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 280%;
      border: solid #373731 4px;
      border-radius: 4px;
      background-color: white;
      position: absolute;
      bottom: -120px;
      left: 50px;
      transform: rotate(12deg);
      font-size: 1.4rem;
      text-align: center;
      display: flex;
      align-items: center;
      font-weight: bold;
      color: black;
      box-shadow: 4px 3px 0px white;
      cursor: pointer;
  
      &:hover {
        transform: scale(1.2) rotate(7deg);
        background-size: 1400%;
        border: 4px solid #ef2f49;
  
      }
  
      @media (max-width: 800px) {
        bottom: -280px;
        left: -50px;
        width: 150px;
      }
  
      @media (max-width: 600px) {
        bottom: -315px;
        left: -40px;
      }
  
    `,
    SadDecoration = styled.div`
      cursor: pointer;
      height: 170px;
      transition: all 0.6s;
      width: 140px;
      background-image: url(${cloud});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center 10%;
      background-size: 100%;
      border: solid #373731 4px;
      border-radius: 4px;
      background-color: #b6e4ed;
      position: absolute;
      bottom: -190px;
      left: 20px;
      transform: rotate(14deg);
      font-size: 1.4rem;
      text-align: center;
      padding-bottom: 10px;
      display: flex;
      align-items: flex-end;
      font-weight: bold;
      color: black;
      box-shadow: 4px 3px 0px white;
  
      &:hover {
        transform: scale(1.1) rotate(7deg);
        background-size: 1000%;
        background-position: 87% 15%;
        color: white;
        background-color: white;
        border: solid #b6e4ed 4px;
        opacity: 0.8;
      }
  
      @media (max-width: 800px) {
        bottom: -280px;
        left: -50px;
        width: 150px;
      }
  
      @media (max-width: 600px) {
        bottom: -315px;
        left: -40px;
      }
  
    `,
    DashboardContainer = styled.div`
      margin: 8% 5%;
      position: relative;
      background-size: contain;
      background-repeat: no-repeat;
      height: 600px;
      transition: all 1s;
      background-image: url(${cloudBG});
    `,
    ButtonDisplay = styled.div`
      display: flex;
      align-items: flex-start;
      position: relative;
    `,
    ModalContainer = styled.div`
      position: fixed;
      background-color: rgba(0,0,0,0.6);
      top: 0%;
      left: 0%;
      z-index: 100;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transition: 0.3s all;
    `,
    ModalContainerLogo = styled.div`
      margin-top: 40px;
      height: 180px;
      width: 180px;
      background-color: white;
      border: 4px solid #232131;
      border-radius: 5px;
      transform: rotate(-2deg) scale(1.1);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 1.8rem;
      text-align: center;
      font-weight: bold;
      box-shadow: 2px 2px 100px black;
    `,
    ModalContainerTitle = styled.h1`
      color: white;
      margin-bottom: 50px;
      text-shadow: 2px 2px 10px black;
      z-index: 12;
    `,
    ModalContainerSubTitle = styled.h2`
      color: white;
      z-index: 12;
    `,
    ModalContainerSmiley = styled.div`
      width: 60%;
      margin-bottom: 200px;
      display: flex;
      justify-content: space-around;
  
      @media (max-width: 1000px) {
        width: 80%;
      }
  
      @media (max-width: 600px) {
        width: 90%;
      }
    `,
    SmileyContainer = styled.div`
      background-color: #efd853;
      height: 150px;
      width: 150px;
      border-radius: 100px;
      cursor: pointer;
      border: 4px solid #232320;
      box-shadow: 0px 0px 100px black;
      z-index: 10;
      background-postion: center;
      background-size: contain;
      background-repeat: no-repeat;
  
      &:hover {
        transform: scale(1.2);
        z-index: 11;
        opacity: 0.95;
      }
  
      @media (max-width: 600px) {
        height: 120px;
        width: 120px; 
      }
    `
  
  const LogoFlat = styled.div`
    display: inline-block;
    height: 40px;
    width: 40px;
    margin-bottom: 10px;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
  ` 
  
  const Speakers = styled.div`
    // background-color: red;
    transition: all 1s;
    width: 160px;
    height: 700px;
    position: absolute;
    left: -17%;
    top: -425px;
    background-image: url(${speakers});
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    transform: rotate(-2deg) scale(1.1);
    z-index: 0;
  
    @media(max-width: 600px) {
      left: -100%;
      transform: rotate(-10deg) scale(2);
    }
  `

export default Dashboard;