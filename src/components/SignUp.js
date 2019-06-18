import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputSignUp from './core/InputSignUp';
import InputSignUpSmall from './core/InputSignUpSmall';
import ValidationButton from './core/ValidationButton';
import Duck from './core/Duck';
import logo from '../img/logo_flat.svg';
import back from '../img/caution.svg';
import Api from '../utils/Api';

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      classe: '',
      city: '',
      bdDate: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange({ name, value }) {
    console.log('Name + value', name, value)
    this.setState({
      [name]: value
    })
  }

  onSubmit() {
    const {
      username,
      password,
      classe,
      city,
      bdDate
    } = this.state;

    console.log(this.state);

    Api.signup({
      username,
      password,
      class: classe,
      city,
      bdDate
    })
    .then((res) => {
      console.log('res', res);
      if (res.error) {
        alert(res.error);
      } else {
        Api.setUser(res);
        this.props.history.push("/dashboard");
      }
    });
  }


  render () {
    return (
      <SignUpContainer>

        <Duck></Duck>

        <Link to="/">
          <BackButton></BackButton>
        </Link>
          
        <SignUpTitle>Inscris-toi au <LogoFlat>Club Marcel</LogoFlat> et rejoins l'élite du Bonheur.</SignUpTitle>
        
        <Form onSubmit={this.onSubmit}>
          <InputSignUp 
            value="Username" 
            type="text" 
            name="username" 
            onChangeFn={this.onChange}
            title="Pseudo"></InputSignUp>

          <InputSignUp 
            value="Ville" 
            type="text" 
            name="city" 
            onChangeFn={this.onChange}
            title="Ville"></InputSignUp>

          <InputSignUp 
            value="Mot de Passe" 
            type="password" 
            name="password" 
            onChangeFn={this.onChange}
            title="Mot de Passe"></InputSignUp>

          <InputSignUp 
            value="Confirmation MDP" 
            type="password" 
            onChangeFn={this.onChange}
            title="Confirmation Mot de Passe"></InputSignUp>

          <InputSignUpFlex>

            <InputSignUpSmall 
              value="Birthday" 
              type="string" 
              name="bdDate" 
              onChangeFn={this.onChange}
              title="Anniversaire"></InputSignUpSmall>

            <InputSignUpSmall 
              value="Classe" 
              type="text" 
              name="classe" 
              onChangeFn={this.onChange}
              title="Classe"></InputSignUpSmall>

          </InputSignUpFlex>

          <InputSignUpFlex>
            <ValidationButton onClickFn={this.onSubmit} title="Valider l'inscription"></ValidationButton>
          </InputSignUpFlex>

        </Form>
        
      </SignUpContainer>
    );
  }
}

// Style

const SignUpContainer = styled.div`
  margin: 3%;
  position: relative;
`

const BackButton = styled.div`
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

  &:hover {
    transform: rotate(10deg) scale(1.1);
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    top: -55px;
    left: 7px;
    transform: rotate(-3deg) scale(1.2);
  }
`

const Form = styled.div`
  // background-color: pink;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  // @media (max-width: 800px) {
  //   justify-content: space-around;
  }
`

const SignUpTitle = styled.h1`
  text-align: center;
  margin: auto;
  width: 60%;
  margin-bottom: 60px;
  margin-top: 60px;


  @media (max-width: 800px) {
    width: 70%;
    margin-bottom: 10px;
    margin-top: 40px;
    margin-left: 100px;
    transform: scale(0.80);
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    transform: rotate(4deg) translateX(38px) scale(0.8);
  }
`

const LogoFlat = styled.div`
  display: block;
  // background-color: red;
  height: 27px;
  width: 195px;
  margin: 15px auto 30px auto;
  background-image: url(${logo});
  background-size: contain;
  background-position: left;
  text-align: right;
  background-repeat: no-repeat;
  transform: scale(2);
  transition: all 0.8s;


  @media (max-width: 600px) {
    transform: scale(1.4);
    margin: 10px auto 20px auto;

  }
` 

const InputSignUpFlex = styled.div`
  // background-color: pink;
  margin-left: 20px;

  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    width: 72%;
    margin-left: 0px;
  }

  @media (max-width: 600px) {
    width: 93%;
    margin-left: 10px;
  }
`

export default SignUp;