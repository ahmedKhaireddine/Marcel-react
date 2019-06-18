import React from 'react';
// import { Link } from 'react-router-dom';
import StopButton from './core/StopButton';
import styled from 'styled-components';
import Config from '../utils/Config';
import AudioPlayer from "react-h5-audio-player";
import Cookies from 'js-cookie';
import Api from '../utils/Api';
import attach from '../img/attach.svg';
import ballon from '../img/ballon.svg';
import ballon2 from '../img/ballon2.svg';
import ballon3 from '../img/ballon3.svg';
import ballon4 from '../img/ballon4.svg';
import ballon5 from '../img/ballon5.svg';
import ballon6 from '../img/ballon6.svg';
import cloud from '../img/cloud6.svg';
import cloudFiller from '../img/cloud8.svg';
import cloudDecoration from '../img/cloud7.svg';
import { keyFrameBallonRespiration, keyFrameCloudRespiration, keyFrameFiller } from '../utils/KeyFrames';
import { timingSafeEqual } from 'crypto';
// import { relative } from 'path';

class Exercice extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isError: false,
      exercice: {},
      startDate: new Date(),
      user: Cookies.getJSON("user") || {},
    }

    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    Api.getExercise(this.props.match.params.id)
        .then(data => {
            console.log("Exercice#data", data.Game);
            this.setState({
                isLoading: false,
                exercice: data.Game,
            })
        }).catch((err) => {
            this.setState({
                isError: true
            })
        });

  }  
  getStats() {
    const lastDate = new Date();
    console.log('Exercice#lastDate', lastDate);
    const time = lastDate - this.state.startDate;
    console.log('Exercice#this.state.startDate', this.state.startDate);
    console.log('Exercice#time', time);

    const statObject = {
      "user": this.state.user._id,
      "game": this.state.exercice._id,
      "time": time,
    }
    const url = Config.host + '/api/statistics/add'
    console.log('exercie#url', url);
    console.log('Exercice#user', this.state.user);
    console.log('Exercice#statObject', statObject); 

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(statObject)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Exercice#getState data', data);
        })
    }

  render() {
    
    if (this.state.isError === true) {
      return (
          <p>Erreur serveur</p>
      );
    }
    if (this.state.isLoading === true) {
        return (
            <p>Chargement...</p>
        );
    }
    if (this.state.exercice.length === 0) {
        return (
            <p>Aucun résultat</p>
        );
    }

    // console.log(this.state.ballonPic)
    if(this.state.exercice.id === 2) {
      console.log('2');
      Ballon = styled.div`
        height: 250px;
        width: 200px;
        background-image: url(${ballon2});
        background-repeat: no-repeat;
        background-position: center;
        animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
        z-index: 5;
    `
    } else if (this.state.exercice.id === 3) {
      console.log('3');
      Ballon = styled.div`
        height: 250px;
        width: 200px;
        background-image: url(${ballon3});
        background-repeat: no-repeat;
        background-position: center;
        animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
        z-index: 5;
      `
    } else if (this.state.exercice.id === 4) {
      console.log('4');
      Ballon = styled.div`
        height: 250px;
        width: 200px;
        background-image: url(${ballon4});
        background-repeat: no-repeat;
        background-position: center;
        animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
        z-index: 5;
      `
    } else if (this.state.exercice.id === 5) {
      console.log('5');
      Ballon = styled.div`
        height: 250px;
        width: 200px;
        background-image: url(${ballon5});
        background-repeat: no-repeat;
        background-position: center;
        animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
        z-index: 5;
      `
    } else if(this.state.exercice.id === 6) {
      console.log('6');
      Ballon = styled.div`
        height: 250px;
        width: 200px;
        background-image: url(${ballon6});
        background-repeat: no-repeat;
        background-position: center;
        animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
        z-index: 5;
      `
    } else {
        Ballon = styled.div`
          height: 250px;
          width: 200px;
          background-image: url(${ballon});
          background-repeat: no-repeat;
          background-position: center;
          animation: ${keyFrameBallonRespiration} 9s ease-in-out 0s infinite;
          z-index: 5;
      `
    }

  


    //
    console.log(this.state.exercice.id)   



    return (
      <ExerciceContainer>
        <div
          style={{
            opacity: 0,
            transform: 'scale(0)',
            position: 'absolute',
          }}
        >
        <AudioPlayer

          autoPlay
          src={this.state.exercice.link}
          onPlay={e => console.log("onPlay")}
        />
        </div>
        <h1 style={{ textAlign: 'center' }}>{this.state.exercice.name}</h1>
       
        <FlexContainer>

          <FillerContainer>
            <Filler></Filler>
            <Cloud></Cloud>

          </FillerContainer>

          <BallonContainer>
            <Ballon></Ballon>

            <StopButton
              getStats = {this.getStats}
              title = "Arrêter"
            >
            </StopButton>
            <Attach></Attach>
            <CloudDecoration></CloudDecoration>
          </BallonContainer>

          <FillerContainer
            style = {{
              transform: 'rotate(180deg)',
            }}
          >
            <Filler></Filler>
            <Cloud></Cloud>
          </FillerContainer>

        </FlexContainer>

        <Instructions>{this.state.exercice.instructions}</Instructions>

      </ExerciceContainer>
    );
  }
}

let 
  Ballon = styled.div``

const
  ExerciceContainer = styled.div`
    // background-color: red;
    margin: 5%;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  `,
  BallonContainer = styled.div`
    margin: 20px auto 0 auto;
    display: flex;
    height: 70%;
    width: 50%;
    background-color: white;
    border: solid 4px #313132;
    border-radius: 5px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    transition: all 1s;
    background-image: url(${cloud});
    background-size: cover;
    animation: ${keyFrameCloudRespiration} 4000s linear infinite;
    position: relative;

    @media (max-width: 800px) {
      width: 90%;
    }

    @media (max-width: 600px) {
      height: 62%;
    }
  `,
  Instructions = styled.div`
    // background-color: red;
    height: 50px;
    margin: -160px auto 0 auto;
    font-size: 1.2rem;
    text-align: justify;
    transition: all 0.5s;

    @media(max-width: 600px) {
      margin: -260px auto;
    }
  `,
  Attach = styled.div`
    // background-color: red;
    width: 120px;
    height: 60px;
    position: absolute;
    left: -14px;
    transform: rotate(180deg);
    top: 30px;
    background-image: url(${attach});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 3;
  `,
  CloudDecoration = styled.div`
    background-image: url(${cloudDecoration});
    z-index: 3;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 20px;
    width: 160px;
    height: 100px;
    right: -50px;
    position: absolute;
    // background-color: red;
    transition: all 1s;

    @media(max-width: 600px) {
      right: -30px;
    }
  `
const
  FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;

  `,
  FillerContainer = styled.div`
    background-color: #83d1a3;
    width: 5vw;
    transition: all 1s;
    max-width: 30px;
    height: 70%;
    margin: 0 10%;
    border: solid 4px #313132;
    border-radius: 4px;


    @media(max-width: 800px) {
      height: 65%;
      margin: 0 5%;
    }

    @media(max-width: 600px) {
      height: 60%;
      margin: 0 2%;
    }
  `,
  Filler = styled.div`
    background-color: #B5E4EC;
    border-bottom: solid 4px #313132;
    width: 100%;
    animation: ${keyFrameFiller} 9s ease-in-out infinite;
  `,
  Cloud =styled.div`
    height: 80px;
    width: 100px;
    // background-color: red;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    top: -40px;
    right: 35px;
    background-image: url(${cloudFiller});
  `


export default Exercice;