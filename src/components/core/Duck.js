import React from 'react';
import styled from 'styled-components';
import duck from '../../img/duck.svg';

class Duck extends React.Component {
  render() {
    return (
      <DuckContainer></DuckContainer>
    );
  }
}

//Style

const DuckContainer = styled.div`
  background-image: url(${duck});
  background-size: coontain;
  background-repeat: no-repeat;
  // background-color: red;
  height: 220px;
  width: 260px;
  position: absolute;
  right: -170px;
  top: -30px;
  transform: rotate(4deg);
  transition: all 1s;

  @media(max-width: 1200px) {
    right: -120px;
    top: -50px;
    height: 250px;
    width: 290px;
  }

  @media(max-width: 900px) {
    right: -280px;
    top: -30px;
    height: 320px;
    width: 360px;
    transform: rotate(-5deg);
  }

  @media(max-width: 600px) {
    right: -500px;
    top: -500px;
    height: 320px;
    width: 360px;
    transform: scale(2);
  }
`

export default Duck;