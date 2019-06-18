// Imports

import React from 'react';
// import { Link } from 'react-router-dom';
import ValidationButton from './core/ValidationButton';
import styled from 'styled-components';
import logo from '../img/logo_flat.svg';
import Api from '../utils/Api';

// Class 

class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange({name, value}) {
    this.setState({
      [name]: value
    })
  };

  onSubmit() {
    const {
      username, 
      password
    } = this.state;


    Api.login({ username, password })
      .then((res) => {
        if(res.error) {
          alert(res.error);
        } else {
          Api.setUser(res);
          // this.props.history.push("/");
          window.location = "/dashboard";
        }
      })


  }

  render () {
    console.log('#login', this.state);

    return (
      <LoginWrapper>

        <LoginTitle>
          <LogoFlat></LogoFlat>
          Club Marcel
        </LoginTitle>

        <LoginSubTitle>Bienvenu dans le Club Marcel, l'Obédience des Héros !</LoginSubTitle>
        <LoginInput type="mail" onChange={(e) => this.onChange({name: 'username', value: e.target.value})}></LoginInput>
        <LoginInput type="password"  onChange={(e) => this.onChange({name: 'password', value: e.target.value})}></LoginInput>

        <ValidationButton onClickFn={this.onSubmit} title="Entrer dans le club"></ValidationButton>

      </LoginWrapper>
    );
  }
}

// Style

const LoginWrapper = styled.div`
  // background-color: red;
  margin: 20% auto 0 auto;
  height: 75%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 1000px) {
    height: 80%;
    width: 60%;
    margin: 11% auto 0 auto;
  }


  @media (max-width: 600px) {
    height: 52%;
    width: 60%;
    margin: 30% auto 0 24%;
    justify-content: space-between;
    transform: rotate(-3deg);
  }
`

const LogoFlat = styled.div`
  display: inline-block;
  // background-color: red;
  height: 27px;
  width: 27px;
  margin-right: 10px;
  margin-top: 2px;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;

  @media (max-width: 1000px) {
   transform: scale(0);
  }
` 

const LoginTitle = styled.h1`
transition: all 0.3s;

  @media (max-width: 1000px) {
    width: 30%;    
    margin: 20px auto;
    transform: scale(1.3);
  }

  @media (max-width: 600px) {
    height: 0px;
    opacity: 0;
  }
`

const LoginSubTitle = styled.p`
transition: all 0.5s;
font-size: 1.12em;
font-weight: bold;

  @media (max-width: 1000px) { 
    width: 85%;    
    margin: 0 auto 20px auto;
  }

  @media (max-width: 600px) {
    height: 0px;
    opacity: 0;
  }
`

const LoginInput = styled.input`
  height: 40px;
  border: 3px solid #232131;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 1.2rem;

`

// Export

export default Login; 