import React from 'react';
import Api from '../../utils/Api';
import styled from 'styled-components';
import cross1 from '../../img/cross1.svg';
import cross2 from '../../img/cross2.svg';


class LogoutButton extends React.Component {
  render () {
    return (
      <LogoutButtonWrapper
        onClick={() => {
          Api.logout();
          window.location = "/";
        }}
      ></LogoutButtonWrapper>
    );
  }
}

// Style

const LogoutButtonWrapper = styled.button`
  transition: all 0.5;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  background-image: url(${cross2});
  height: 100px;
  width: 100px;
  position: absolute;
  cursor: pointer;
  right: -110px;
  top: -20px;
  z-index: 10;

  &:hover {
    background-image: url(${cross1});
  }

  @media (max-width: 1000px) {
    right: -50px;
  }

  @media (max-width: 600px) {
    right: 0px;
    top: 0px;
  }
`

export default LogoutButton;

