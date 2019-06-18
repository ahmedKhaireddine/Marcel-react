import React from 'react';
import styled from 'styled-components';

class InputSignUp extends React.Component {
  render () {

    console.log('commentaire pour savoir', this.props);

    return (
      <InputWrapper>

        <InputTitle>{this.props.title}</InputTitle>

        <Input type={this.props.type} onChange={(e) => {this.props.onChangeFn({name: this.props.name, value: e.target.value})}}></Input>

      </InputWrapper>
    );
  }
}

const InputWrapper = styled.div`
  width: 45%;
  margin: auto;
  position: relative;

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

const InputTitle = styled.div`
  position: absolute;
  left: -20px;
  background-color: #FFF58D;
  padding: 2px 5px;
  top: -15px;
  transform: rotate(-3deg);
  font-size: 1.2rem;
  z-index: 5;
  border: 4px solid white;
  font-weight: bold;
`

const Input = styled.input`
  transition: all 0.5s;
  height: 50px;
  border: 4px solid #232131;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 1.2rem;
  margin-bottom: 40px;  
  width: calc(100% - 20px);

  @media (max-width: 800px) {
    // width: 100%;
    height: 50px;
    margin-bottom: 20px;  
  }
`


export default InputSignUp;