import React from 'react';
import smileyHappy from '../../img/smiley-happy.svg';
import smileySad from '../../img/smiley-sad.svg';
import styled from 'styled-components';


class QuestionFlex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClickedLike : false,
      isClickedDislike : false,
    };

    // this.addLike = this.addLike.bind(this);
    // this.addDislike = this.addDislike.bind(this);
  }

//   addLike() {
//     this.setState({
//       isClickedDislike: false,
//     })

//   if(this.state.isClickedLike === false) {
//     const calcul = this.props.likes + 1;
//     const total = calcul + this.props.dislikes;
//     const pourcentage = (calcul / total) * 100;
//     this.setState({
//       pourcentage: pourcentage,
//     })
//   } else {
//     const calcul = this.props.likes;
//     const total = calcul + this.props.dislikes;
//     const pourcentage = (calcul / total) * 100;
//     this.setState({
//       pourcentage: pourcentage
//     })
//   }
// }

// addDislike() {
//     this.setState({
//       isClickedLike: false,
//     })    
  
//   if(this.state.isClickedDislike === false) {
//     const calcul = this.props.dislikes + 1;
//     const total = this.props.likes + calcul;
//     const pourcentage = (this.props.likes / total) * 100;
//     this.setState({
//       pourcentage: pourcentage
//     })
//   } else {
//     const calcul = this.props.dislikes;
//     const total = this.props.likes + calcul;
//     const pourcentage = (this.props.likes / total) * 100;
//     this.setState({
//       pourcentage: pourcentage
//     })
//   }
// }

  render() {
    console.log('props', this.props)
    return (
       <div style={{display: 'flex', flexDirection: 'column', minWidth: 400, textAlign: 'center'}}>
              
        <h2>{this.props.question}</h2>

        <SmileyContainer>

          <AnswerButton
            style = {{ 
              backgroundImage : `url(${smileySad})`,
              backgroundColor:
              this.state.isClickedDislike ?
              '#ed4e63' : '#f2d62a' 
            }} 
            onClick={()=>{
            this.props.onClick(`answer${this.props.id}`, 'Non');
            this.setState({
              isClickedDislike: true,
              isClickedLike: false,
            })
          }}></AnswerButton>

          <AnswerButton 
            style = {{ 
              backgroundImage : `url(${smileyHappy})`,
              backgroundColor:
              this.state.isClickedLike ?
              '#42ae70' : '#f2d62a' 
            }} 
            onClick={()=>{
            this.props.onClick(`answer${this.props.id}`, 'Oui');
            this.setState({
              isClickedLike: true,
              isClickedDislike: false,
            })
          }}></AnswerButton>

        </SmileyContainer>
       </div>
    );
  }
}

const 
  SmileyContainer = styled.div`
    margin-top: 10px;
    display:flex;
    justify-content: space-around;
  `,  
  AnswerButton = styled.button`
    background-postion: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #efd853;
    height: 80px;
    width: 80px;
    border-radius: 100px;
    cursor: pointer;
    border: 4px solid #232320;
    box-shadow: 0px 0px 100px black;

    &:hover {
      transform: scale(1.2);
      z-index: 11;
      opacity: 0.95;
    }

    @media(max-width: 700px) {
      height: 60px;
      width: 60px;    
    }
  `

export default QuestionFlex;