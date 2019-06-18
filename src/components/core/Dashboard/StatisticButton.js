import React from 'react';
import styled from 'styled-components';
import gridBook from '../../../img/gridBook.svg';
import graph from '../../../img/graph.svg';


class StatisticButton extends React.Component {
  render () {
    return (
      <StatisticButtonContainer>

        <Decoration></Decoration>

        <Title>Statistiques de ton parcours</Title>
        <SubTitle>Découvre tes résultats !</SubTitle>
      </StatisticButtonContainer>
    );
  }
}

// Style

const StatisticButtonContainer = styled.div`
  width: 270px;
  background-color: #70e086;
  background-size: 70%;
  border: 4px solid #232131;
  background-image: url(${graph});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 180px;
  position: absolute;
  top: -100px;
  left: 40px;
  transform: rotate(-4deg) scale(1.05);
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
    background-size: 0%;
  }

  @media (max-width: 1100px) {
    top: -30px;
    left: 30px;
    transform: rotate(-4deg) scale(1);
  }

  @media (max-width: 600px) {
    top: -25px;
    left: -10px;
    transform: rotate(-4deg) scale(0.9);
  }
`,
Decoration = styled.div`
  background-image: url(${gridBook});
  background-size: cover;
  // background-color: red;
  height: 50px;
  width: 90%;
  position: absolute;
  top: -20px;
  left: 15px;
`,
Title = styled.h1`
  padding-top: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 1.7rem;
`,
SubTitle = styled.p`
  color: black;
  letter-spacing: 2px;

`

export default StatisticButton;