import React from 'react';
import styled from 'styled-components';
import attach from '../../../img/attach.svg';
import arrow from '../../../img/arrow.svg';
import {date, monthName, year} from '../../../utils/getCurrentDate';
import { keyFrameArrow } from '../../../utils/KeyFrames';
import grid from '../../../img/grid.png';


class DayDisplay extends React.Component {
  render() {

    console.log(date, monthName, year)

    return (
      <DayDisplayContainer>

        <HelloDisplay>
          <NameContainer>Bonjour <NameWrapper>{this.props.name}</NameWrapper>, n'oublie pas ton moment d'écriture.</NameContainer>
          <Arrow></Arrow>  
        </HelloDisplay>

        <DateDisplay>
          <Attach></Attach>
          <DayContainer>{date}</DayContainer>
          <MonthContainer>{monthName}</MonthContainer>
          <YearContainer>{year}</YearContainer>
        </DateDisplay>

      </DayDisplayContainer>
    );
  }
}

// Style

const 
  DayDisplayContainer = styled.div`
    &:hover {
      transform: scale(1.05);
    }
  `,
  Attach = styled.div`
    // background-color: red;
    width: 110px;
    height: 60px;
    position: absolute;
    left: -13px;
    top: 150px;
    background-image: url(${attach});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(200deg);
    z-index: 3;

    @media (max-width: 600px) {
      top: 110px;
    }
  `,
  DateDisplay = styled.div`
    border: 8px solid #232131;
    border-radius: 5px;
    background-color: white;
    height: 300px;
    max-width: 300px;
    min-height: 400px;
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: rotate(1.5deg);
    box-shadow: 20px 0px 100px rgba(0,0,0,0.2);

    @media (max-width: 800px) {
      max-width: 50vw;
      box-shadow: 2px 2px 100px rgba(0,0,0,0.4);
    }

    @media (max-width: 600px) {
      max-width: 80vw;
      box-shadow: 2px 2px 60px rgba(0,0,0,0.4);
    }
  `,
  DayContainer = styled.h1`
  // background-color: red;
  font-size: 12rem;
  line-height: 11rem;
  margin-top: 20px;
  text-align: center;
  color: #EE223E;
  font-weight: bold;
`,
MonthContainer = styled.h1`
  font-size: 5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  color: #313132; 
`,
YearContainer = styled.h1`
  // background-color: pink;
  margin: 0;
  font-size: 5rem;
  text-align: center;
  color: #313132; 
`

const 
    HelloDisplay = styled.div`
      background-color: white;
      border: 4px solid #313132;
      border-radius: 15px;
      height: 80px;
      width: 200px;
      position: absolute;
      right: -20px;
      top: 80px;
      transform: rotate(-6deg);
      display: flex;
      justify-content center;
      align-items: center;
      text-align: center;
      color: #313132;
      font-size: 1.15rem;
      padding: 5px;
      z-index: 10;
      background-image: url(${grid});
      background-size: 500%;
      font-weight: bold;


      @media(max-width: 800px) {
        right: -30px;
        top: 100px;
      }

      @media(max-width: 600px) {
        right: -5px;
        top: 150px;
        height: 80px;
        width: 140px;
        font-size: 0.8rem;
      }

      &:hover {
        transform: scale(1.1) rotate(-6deg);
      }
    `,
    Arrow = styled.div`
      // background-color: red;
      height: 80px;
      width: 80px;
      position: absolute;
      left: -60px;
      top: -100px;
      background-repeat: no-repeat;
      background-image: url(${arrow});
      animation: ${keyFrameArrow} 4s linear infinite;

      @media (max-width: 1000px) {
        left: 25px;
      }

      @media (max-width: 600px) {
        top: -90px;
        left: 15px;
      }
    `,
    NameContainer = styled.div`
    `,
    NameWrapper = styled.div`
      color: green;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 1.3rem;

      @media (max-width: 600px) {
        font-size: 1rem;
      }
    `

export default DayDisplay;