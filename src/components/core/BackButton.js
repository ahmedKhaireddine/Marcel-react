import React from 'react';
import styled from 'styled-components';
import back from '../../img/caution.svg'


class BackButton extends React.Component {
  render () {
    return (
      <BackButtonWrapper></BackButtonWrapper>
    );
  }
}

// Style

const BackButtonWrapper = styled.div`
  transition: all 0.5s;
  background-image: url(${back});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  // background-color: green;
  height: 170px;
  width: 120px;
  position: absolute;
  top: -80px;
  left: -60px;
  transform: rotate(5deg);
  cursor: pointer;
  z-index: 1000;

  &:hover {
    transform: rotate(10deg) scale(1.1);
    opacity: 0.9;
  }  
`

export default BackButton;