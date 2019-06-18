import React from 'react';
import styled from 'styled-components';
import BackButton from './core/BackButton';
import { Link } from 'react-router-dom';

class Journal extends React.Component {
  render() {
    return (
      <JournalContainer>

        <Link to="/dashboard">
          <BackButton></BackButton>
        </Link>

        <Title>Journal</Title>

        <JournalWrapper></JournalWrapper>

      </JournalContainer>
    )
  }
};

const 
  JournalContainer = styled.div`
    margin: 10% 5% 10% 5%;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    text-align: right;
  `,
  Title = styled.h1`
    margin-left: 50px;
  `,
  JournalWrapper = styled.div`
    height: 500px;
    transition: all 1s;
    background-color: white;
    border: 4px solid #313132;

    @media (max-width: 900px) {
      height: 580px;
    }

    @media (max-width: 600px) {
      height: 600px;
    }
  `

export default Journal;
