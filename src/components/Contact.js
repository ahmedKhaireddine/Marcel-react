import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from './core/BackButton';

class Contact extends React.Component {
  render () {
    return (
      <ContactContainer>
        
        <Link to="/">
          <BackButton></BackButton>
        </Link>

        <h1  style={{marginLeft: 50}}>Contact</h1>

      </ContactContainer>
    );
  }
}

// Style

const ContactContainer = styled.div`
  // background-color: red;
  margin: 5%;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`

export default Contact;

