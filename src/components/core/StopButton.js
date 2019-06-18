import React from 'react';
import styled from 'styled-components';
import dots from '../../img/dots.svg';
import dotsRed from '../../img/dotsRed.svg';

class StopButton extends React.Component {
  render () {
    return (
      <Button 
        onClick={() => {
          this.props.getStats()
          window.location = '/respiration'
        }}
      >{this.props.title}</Button>
    );
  }
}


const Button = styled.button`
  height: 60px;
  width: 50%;
  border-radius: 30px;
  margin: 0px auto 0 auto;
  border: 3px solid #232131;
  background-color: #ef2f49;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  background-image: url(${dots});
  background-size: cover;
  filter: contrast(95%);
  box-shadow: 3px 3px 0px red;

  &:hover {
    background-color: white;
    color: #232131;
    transform: scale(1.05);
    font-size: 1.3rem;
    background-image: url(${dotsRed});
    opacity: 0.9;
    box-shadow: 3px 3px 1000px rgba(255,0,0,0);

  }

  @media (max-width: 1000px) { 
    margin: 0px auto 0 auto;
    width: 60%;
  }

  @media (max-width: 800px) {
    width: 50%;

  }

  @media (max-width: 600px) {
    background-image: url(${dotsRed});
    background-color: white;
    color: #232131;
    box-shadow: 3px 3px 0px #ef2f49;
    width: 80%;

    &:hover {
      background-image: url(${dots});
      background-color: #ff0033;
      color: white;

    }
  }
`

export default StopButton;