import React from 'react';
import BackButton from './core/BackButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clouds from '../img/cloud5.svg';
import pen from '../img/pen.svg';
import rainbow from '../img/rainbow.svg';
import Cookies from 'js-cookie';
import Api from '../utils/Api';
import moment from 'moment';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameTime: 200,
      gameTimeTotal: 3000,
      gameWeek: 30,
      gameMonth: 240,
      user : Cookies.getJSON("user") || {},
      isLoading : true,
      isError : false,
      stats : []
    }
  }

  componentDidMount() {
    Api.getTime(this.state.user._id)
    .then(data => {
      console.log('Stats#data', data);
      this.getTotalTimes(data.statisticals);
      this.setState({
        stats : data.statisticals,
        isLoading: false,
      });
    }).catch((err) => {
      this.setState({
        isError: true
      })
    }); 
  }

  getTotalTimes(tabStats){
    console.log('Stats#getTotalTimes', tabStats);
    let totalTimes = 0;

    for(let i = 0; i < tabStats.length; i++){
      totalTimes = totalTimes + tabStats[i].Time;
    } 
    console.log("totalTime", moment(totalTimes).format('mm:ss'));
    this.setState({
      gameTimeTotal: moment(totalTimes).format('mm')
    });
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
    return (
      <StatsContainer>

        <Link to="/dashboard">
          <BackButton></BackButton>
        </Link>

        <Title>Statistiques du parcours de l'enfant</Title>

        <DisplayStatsContainer>

          <DisplayStatsWrapper>
            <DisplayStats
              style={{
                backgroundImage: `url(${clouds})`,
              }}
            >{this.state.gameTime} min</DisplayStats>
            <TitleStats>Moyenne du temps de jeu</TitleStats>
          </DisplayStatsWrapper>

          <DisplayStatsWrapper>
            <DisplayStats
              style={{
                backgroundImage: `url(${clouds})`,
              }}
            >{this.state.gameTimeTotal} min</DisplayStats>
            <TitleStats>Temps de jeu total</TitleStats>
          </DisplayStatsWrapper>

        </DisplayStatsContainer>

        <DisplayStatsContainer>

          <DisplayStatsWrapper>
            <DisplayStats
              style={{
                backgroundImage: `url(${clouds})`,
              }}
            >{this.state.gameWeek}</DisplayStats>
            <TitleStats>Exercices / Semaine</TitleStats>
          </DisplayStatsWrapper>

          <DisplayStatsWrapper>
            <DisplayStats>{this.state.gameMonth}</DisplayStats>
            <TitleStats>Exercices / Mois</TitleStats>
          </DisplayStatsWrapper>

        </DisplayStatsContainer>

        <SubTitle>Retrouve ici tes statstiques et motive toi à te surpasser en visualisant ton parcours.</SubTitle>


        <Pen></Pen>
        <Rainbow></Rainbow>
      </StatsContainer>
    )
  }
}

// Style

const 
  StatsContainer = styled.div`
    margin: 7% 5% 10% 5%;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  `,
  Title = styled.h1`
    // background-color: red;
    margin-left: 50px;
    margin-bottom: 0px;
    transition: all 0.5s;

    @media (max-width: 800px) {
      margin-bottom: 70px;
    }

    @media (max-width: 600px) {
      margin-bottom: 40px;
    }
  `,
  DisplayStatsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    @media (max-width: 600px;) {
      width: 150px;
    }
  `,
  DisplayStatsWrapper = styled.div`
    height: 200px;
    width: 250px;
    transition: 0.5s all;

    @media(max-width: 600px) {
      width: 200px;
    }
  `,
  DisplayStats = styled.div`
    background-color : #b6e4ed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
    border: 3px solid #313132;
    border-radius: 5px;
    height: calc(100% - 40px);
    text-align: center;
    background-size: cover;
    background-position: center;
    background-image: url(${clouds});
  `,
  TitleStats = styled.div`
    position: relative;
    display: inline-block;
    left: -20px;
    background-color: #FFF58D;
    padding: 2px 5px;
    top: -15px;
    transform: rotate(-3deg);
    font-size: 1.2rem;
    z-index: 5;
    border: 4px solid white;
    font-weight: bold;
  `,
  SubTitle = styled.p`
    margin: 30px 30px 0 30px;
    font-size: 1.2rem;
    text-align: center;
  `

const
    Pen = styled.div`
      height: 450px;
      width: 40px;
      // background-color: green;
      position: absolute;
      top: -16%;
      right: -2%;
      z-index: 10;
      background-image: url(${pen});
      transform: rotate(-30deg);
      background-repeat: no-repeat;
      background-position: center;
      transition: all 0.5s;


      @media (max-width: 800px) {
        top: 23%;
        right: -8%;
        transform: rotate(3deg);
      }

      @media (max-width: 600px) {
        right: -20%;
      }
    `,
    Rainbow = styled.div`
      backround-color: red;
    `




// Export 

export default Stats;