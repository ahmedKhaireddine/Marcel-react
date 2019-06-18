import React from 'react';
import styled from 'styled-components';
import ballon from '../../../img/ballon.svg';
import cloud from '../../../img/cloud.svg';


class ExerciceButton extends React.Component {
  render () {
    return (
      <ExerciceButtonContainer>

        <Title>Exercices de respiration</Title>
        <SubTitle>Un peu de détente ?</SubTitle>

        <Ballon></Ballon>
      </ExerciceButtonContainer>
    );
  }
}

// Style

const ExerciceButtonContainer = styled.div`
  width: 210px;
  background-color: #b6e4ed;
  background-image: url(${cloud});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 4px solid #232131;
  border-radius: 5px;
  height: 120px;
  position: absolute;
  top: -60px;
  right: 80px;
  transform: rotate(4deg) scale(1.2);
  transition: all 1s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
    background-size: 800%;
  }

  @media (max-width: 1100px) {
    top: 20px;
    right: 50px;
    transform: rotate(3deg) scale(1.3);
  }
  
  @media (max-width: 900px) {
    top: 20px;
    right: 30px;
    transform: rotate(3deg) scale(1.1);
  }


  @media (max-width: 600px) {
    top: 100px;
    right: 5px;
  }
`,
Title = styled.h1`
  color: black;
  font-size: 1.7rem;
  text-align: center;
  margin-top: 20px;
`,
SubTitle = styled.p`
  color: black;
  margin-bottom: 20px;
  letter-spacing: 2px;
`,
Ballon = styled.div`
  transition: all 0.8s;
  // background-color: red;
  background-image: url(${ballon});
  background-size: contain;
  background-repeat: no-repeat;
  height: 120px;
  width: 80px;
  position: absolute;
  right: -30px;
  top: -60px;
  transform: rotate(-3deg);

  @media (max-width: 1000px) {
    height: 120px;
    width: 80px;
    position: absolute;
    right: -10px;
    top: -150px;
    transform: rotate(-3deg) scale(2);
  }

  @media (max-width: 600px) {
    height: 120px;
    width: 80px;
    position: absolute;
    right: -20px;
    top: -140px;
    transform: rotate(-3deg) scale(2.3);
  }
`

export default ExerciceButton;