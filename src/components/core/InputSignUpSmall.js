import React from 'react';
import styled from 'styled-components';

class InputSignUpSmall extends React.Component {
  render () {
    return (
      <InputWrapper>

        <InputTitle>{this.props.title}</InputTitle>

        <InputSmall type={this.props.type} onChange={(e) => {this.props.onChangeFn({name: this.props.name, value: e.target.value})}}></InputSmall>

      </InputWrapper>
    );
  }
}

const InputWrapper = styled.div`
  position: relative;
  // background-color: red;
  // margin: 0 20px 0 0px;
  width: 49%;


  @media (max-width: 800px) {
    width: 47%;
    margin: 0;
  }

  @media (max-width: 700px) {
    width: 48%;
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

const InputSmall = styled.input`
  transition: all 0.5s;
  height: 50px;
  border: 4px solid #232131;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 1.2rem;
  margin-bottom: 40px;  
  width: calc(95% - 20px);

  @media (max-width: 1000px) {

  }


  @media (max-width: 700px) {
    width: calc(100% - 30px);
  }
`


export default InputSignUpSmall;