import React from 'react';
import styled from 'styled-components';
import BackButton from './core/BackButton';
import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';
import Api from '../utils/Api';
import cloud from '../img/cloud2.svg';
import ballon from '../img/ballon.svg';
import ballon2 from '../img/ballon2.svg';
import ballon3 from '../img/ballon3.svg';
import ballon4 from '../img/ballon4.svg';
import ballon5 from '../img/ballon5.svg';
import ballon6 from '../img/ballon6.svg';
import pen from '../img/pen.svg';
import posca from '../img/PoscaContainer.svg';
import tippex from '../img/tippex.svg';
import KeyFrameRespiration from './core/Respiration/KeyFrameRespiration';
import { keyFrameBallonPageRespiration } from '../utils/KeyFrames';

class Respiration extends React.Component {
  state = {
    exercises: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {

    Api.getExercises(this.props.id)
      .then(data => {
        console.log('RespirationPage#data', data);
        this.setState({
          exercises: data.Games,
          isLoading: false
        });
      }).catch((err) => {
        this.setState({
          isError: true
        })
      });
  }

  render() {
    const { exercises } = this.state
    return (
      <RespirationContainer>

        <Link to="/dashboard">
          <BackButton></BackButton>
        </Link>

        <Title>Exercices de respiration</Title>

        <DisplayExercice>

          <TypingContainer>
            {/* <Typing> */}
              {this.props.description}
            {/* </Typing> */}

            <DisplayKeyFrame>
              <KeyFrameRespiration></KeyFrameRespiration>
            </DisplayKeyFrame>

            <Posca></Posca>
            <TippEx></TippEx>
            <Pen></Pen>
          </TypingContainer>

          <ContainerExerciceButton>
            {exercises.map((exercice) => {
              if(exercice.id === 1){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon></Ballon>
                    </ExerciceButton>
                  </Link>
                )
              }
              if(exercice.id === 2){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon2></Ballon2>
                    </ExerciceButton>
                  </Link>
                )
              }
              if(exercice.id === 3){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon3></Ballon3>
                    </ExerciceButton>
                  </Link>
                )
              }
              if(exercice.id === 4){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon4></Ballon4>
                    </ExerciceButton>
                  </Link>
                )
              }
              if(exercice.id === 5){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon5></Ballon5>
                    </ExerciceButton>
                  </Link>
                )
              }
              if(exercice.id === 6){
                return (
                  <Link
                    to={`/exercises/${exercice.id}`}
                  >
                    <ExerciceButton key={exercice._id}>
                      {exercice.name}
                      <Ballon6></Ballon6>
                    </ExerciceButton>
                  </Link>
                )
              }
              
            })}
          </ContainerExerciceButton>

        </DisplayExercice>

      </RespirationContainer>
    );
  }
}

const
  RespirationContainer = styled.div`
    margin: 5%;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  `,
  Title = styled.h1`
    margin-left: 50px;

    @media (max-width: 600px) {
      padding-top: 20px;
    }
  `,
  DisplayExercice = styled.div`
  `,
  ContainerExerciceButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
    bottom: 10%;
    width: 100%;

    @media (max-width: 600px) {
      bottom: 13%;
    }
  `,
  ExerciceButton = styled.div`
    background-color: #b6e4ed;
    border: 4px solid #232131;
    background-image: url(${cloud});
    background-size: 100%;
    background-position: center;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    width: 15vh;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 30px;
    color: #313132;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    position: relative;

    &:hover {
      transform: scale(1.1);
      opacity: 0.9;
      background-size: 1000%;
    }

    @media (max-width: 1100px) {
      width: 26vh;
      height: 60px;
    }

    @media (max-width: 800px) {
      width: 30vh;
      height: 60px;
    }

    @media (max-width: 600px) {
      width: 55vh;
      background-size: 60%;
      height: 50px;
    }
  `, 
  Ballon = styled.div`
    // background-color: red;
    background-image: url(${ballon});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -150px;
    left: calc(30% - 40px);
    transition: all 2.4s;
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 7s ease-in-out infinite;

    @media (max-width: 800px) {
      top: -900px;
    }
  `,
  Ballon2 = styled.div`
    // background-color: green;
    background-image: url(${ballon2});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -160px;
    left: calc(50% - 40px);
    transition: all 2.5s;
    transform: scale(1.1);
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 9s ease-in-out infinite;

    @media (max-width: 800px) {
      top: -950px;
    }
  `,
  Ballon3 = styled.div`
    // background-color: blue;
    background-image: url(${ballon3});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -152px;
    left: calc(40% - 40px);
    transition: all 2.6s;
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 8s ease-in-out infinite;

    @media (max-width: 800px) {
      top: -1000px;
    }
  `,
  Ballon4 = styled.div`
    // background-color: pink;
    background-image: url(${ballon4});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -155px;
    left: calc(50% - 40px);
    transition: all 2.2s;
    transform: scale(1.1);
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 6s ease-in-out infinite;

    @media (max-width: 1100px) {
      top: -950px;
    }
  `,
  Ballon5 = styled.div`
    // background-color: yellow;
    background-image: url(${ballon5});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -150px;
    left: calc(60% - 40px);
    transition: all 2.6s;
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 9s ease-in-out infinite;

    @media (max-width: 1100px) {
      top: -1000px;
    }
  `,
  Ballon6 = styled.div`
    // background-color: red;
    background-image: url(${ballon6});
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    height: 165px;
    width: 110px;
    position: absolute;
    top: -162px;
    left: calc(40% - 40px);
    transition: all 2.4s;
    transform: scale(1.1);
    transform-origin: bottom;
    animation: ${keyFrameBallonPageRespiration} 7s ease-in-out infinite;

    @media (max-width: 1100px) {
      top: -900px;
    }
  `

const
  TypingContainer = styled.div`
    background-color : white;
    width : 50%;
    border : 4px #313132 solid;
    padding : 10px;
    border-radius : 5px;
    margin: 5% auto 0 12%;
    transform: rotate(2deg) scale(1.15);
    text-align: justify;
    transition: all 0.5s;
    min-height: 190px;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 800px) {
      margin: 10% auto 0 14%;
    }

    @media (max-width: 600px) {
      transform: rotate(0deg) scale(1);
      width : 90%
      margin: 5% auto 0 auto;
    }
  `,
  DisplayKeyFrame = styled.div`
    // background-color: red;
    border: solid 5px #313132;
    background-color: white;
    border-radius: 4px;
    height: 270px;
    width: 200px;
    position: absolute;
    right: -50%;
    top: -50px;
    transform: rotate(-3deg);
    transition: all 0.5s;
    box-shadow: 2px 2px 10px grey;

    @media (max-width: 900px) {
      transform: scale(0.8) rotate(-5deg);
      right: -170px;
      top: 0%;
      width: 180px;
    }

    @media (max-width: 600px) {
      transform: scale(0);
    }
  `

const
  Posca = styled.div`
    height: 300px;
    width: 45px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${posca});
    top 30px;
    right: -28vw;
    transform: rotate(0deg) scale(1.1);
    // background-color: red;
    transition: 1.2s all; 

    @media (max-width: 1100px) {
      right: -30vw;
      top: 200px;
    }

    @media (max-width: 900px) {
      right: -300px;
      top: 120px;
      transform: rotate(-105deg) scale(1.2);
    }

    @media (max-width: 800px) {
      right: -250px;
      top: -160px;
      transform: rotate(-75deg) scale(1.3);
    }

    @media (max-width: 600px) {
      right: -180px;
      top: -160px;
      transform: rotate(-75deg) scale(1.4);
    }

  `,
  TippEx = styled.div`
    background-image: url(${tippex});
    height: 100px;
    width: 180px;
    position: absolute;
    background-repeat: no-repeat;
    bottom: -30px;
    left: -200px;
    transform: rotate(60deg);
    // background-color: red;
    transition: 2s all;

    @media (max-width: 1100px) {
      transform: rotate(-85deg) scale(1.05);
      bottom: -330px;

    }

    @media (max-width: 900px) {
      left: -530px;
      transform: rotate(-75deg) scale(1.2);
    }

  `,
  Pen = styled.div`
    height: 350px;
    width: 20px;
    position: absolute;
    bottom: -230px;
    left: 240px;
    transform: rotate(-95deg);
    background-image: url(${pen});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 1s;

    @media (max-width: 1100px) {
      left: 30px;
      transform: rotate(-85deg) scale(1.05);
    }

    @media (max-width: 900px) {
      left: -230px;
      transform: rotate(-75deg) scale(1.2);
    }

    @media (max-width: 800px) {
      left: -530px;
      transform: rotate(-105deg) scale(1.4);
    }



  `

export default Respiration;
