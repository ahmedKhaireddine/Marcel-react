import React from 'react';
import styled from 'styled-components';
import BackButton from './core/BackButton';
import { Link } from 'react-router-dom';
import Api from '../utils/Api';
import Cookies from 'js-cookie';
import moment from 'moment';
import grid from '../img/grid.png';
import smileyHappy from '../img/smiley-happy.svg';
import smileyRegular from '../img/smiley-regular.svg';
import smileySad from '../img/smiley-sad.svg';
import ValidationButton from '../components/core/ValidationButton';
import QuestionFlex from '../components/core/QuestionFlex';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';

class Journal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isClickedModal: false,
      questions : [],
      isLoading : true,
      isError : false,
      date: '',
      answer1 : '',
      answer2 : '', 
      answer3 : '', 
      diary : '',
      openModal: false,
      user: Cookies.getJSON("user") || {},
    }

    this.onChangeState = this.onChangeState.bind(this);
  }

  componentDidMount(){
    Api.getQuestions()
      .then(data => {
        console.log('Journal#data', data);
        this.setState({
          questions : data.questions,
          isLoading : false
        });
      }).catch((err) => {
        this.setState({
          isError: true
        })
      });
  }

  onChangeState(key, value){
    console.log('onChangeState key',key);
    console.log('onChangeState value', value);
    this.setState({
      [key] : value
    })
  }

  saveMemories(){
    const userId = this.state.user._id;
    const date = moment().format('DD-MM-YYYY');
    const diaryObject ={
      answer1 : this.state.answer1,
      answer2 : this.state.answer2,
      answer3 : this.state.answer3,
      diary : this.state.diary
    }
    console.log("Journal#date", date);
    console.log("Journal#userId", userId);
    console.log("Journal#dairyObject", diaryObject);
    Api.saveDiary(userId, date, diaryObject);
  }

  searchMood = date => {
    const userId = this.state.user._id;
    const newdate = moment(date).format('DD-MM-YYYY');
    console.log('onChange newdate :', newdate);
    console.log('onChange userId :', userId);
    Api.getMoodByDate(userId, newdate)
    .then(data => {
      console.log('Data', data);
      this.setState({
        moodByDate: data.Moods,
        openModal: true,
      });
    });
  }

  render() {
    // console.log('State coucou', this.state)

    if (this.state.isError === true) {
      return (
          <p>Erreur serveur</p>
      );
    }
    if (this.state.isLoading === true) {
        return (
            <p>Chargement...</p>
        );
    }
    if (this.state.questions.length === 0) {
        return (
            <p>Aucun résultat</p>
        );
    }

    let ModalJournal = "";
    let ModalMood = "";

    if(this.state.openModal === false || this.state.moodByDate === null) {
    } else if (this.state.openModal === true) {
      let Smiley = <h1></h1>;
      let Smiley1 = <h1></h1>;
      let Smiley2 = <h1></h1>;
      let Smiley3 = <h1></h1>;

      if (this.state.moodByDate.mood === "happy"){
        Smiley = 
          <SmileyMoodContainer
            style = {{ 
              backgroundImage: `url(${smileyHappy})`,
              backgroundColor: '#42ae70',
            }} 
          ></SmileyMoodContainer>;
      } else if (this.state.moodByDate.mood === "regular") {
        Smiley = 
          <SmileyMoodContainer
            style = {{ 
              backgroundImage: `url(${smileyRegular})`,
              backgroundColor: '#f2d62a',
            }} 
          ></SmileyMoodContainer>;
      } else {
        Smiley = 
          <SmileyMoodContainer
            style = {{ 
              backgroundImage: `url(${smileySad})`,
              backgroundColor: '#ed4e63',
            }} 
          ></SmileyMoodContainer>;
      }

      // 

      if (this.state.moodByDate.answer1 === "Oui"){
        Smiley1 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyHappy})`,
              backgroundColor: '#42ae70',
            }} 
          ></SmileyMoodContainerSmall>;
      } else if (this.state.moodByDate.answer1 === "Non") {
        Smiley1 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileySad})`,
              backgroundColor: '#ed4e63',
            }} 
          ></SmileyMoodContainerSmall>;
      } else {
        Smiley1 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyRegular})`,
              backgroundColor: '#f2d62a',
            }} 
          ></SmileyMoodContainerSmall>;
      }

      if (this.state.moodByDate.answer2 === "Oui"){
        Smiley2 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyHappy})`,
              backgroundColor: '#42ae70',
            }} 
          ></SmileyMoodContainerSmall>;
      } else if (this.state.moodByDate.answer2 === "Non") {
        Smiley2 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileySad})`,
              backgroundColor: '#ed4e63',
            }} 
          ></SmileyMoodContainerSmall>;
      } else {
        Smiley2 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyRegular})`,
              backgroundColor: '#f2d62a',
            }} 
          ></SmileyMoodContainerSmall>;
      }

      if (this.state.moodByDate.answer3 === "Oui"){
        Smiley3 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyHappy})`,
              backgroundColor: '#42ae70',
            }} 
          ></SmileyMoodContainerSmall>;
      } else if (this.state.moodByDate.answer3 === "Non") {
        Smiley3 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileySad})`,
              backgroundColor: '#ed4e63',
            }} 
          ></SmileyMoodContainerSmall>;
      } else {
        Smiley3 = 
          <SmileyMoodContainerSmall
            style = {{ 
              backgroundImage: `url(${smileyRegular})`,
              backgroundColor: '#f2d62a',
            }} 
          ></SmileyMoodContainerSmall>;
      }

      // 

      ModalMood = 
        <ModalMoodContainer>
          <MoodWrapper>
            <ModalMoodContainerTitle>Découvre tes résultats du {this.state.moodByDate.date}</ModalMoodContainerTitle>
            { Smiley }
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
              <MoodQuestionContainer>Etais-tu serein ? {Smiley1}</MoodQuestionContainer>
              <MoodQuestionContainer>Avais-tu ris ce jour ? {Smiley2}</MoodQuestionContainer>
              <MoodQuestionContainer>Avais-tu fais du sport ? {Smiley3}</MoodQuestionContainer>
            </div>
            <Ecriture>{this.state.moodByDate.diary}</Ecriture>
            <div style={{width: '50%', margin: 'auto'}}>
            <ValidationButton
              title="Fermer"
              onClickFn = {
                () => this.setState({
                  openModal: false
                })
              }
            ></ValidationButton>
            </div>
          </MoodWrapper>
        </ModalMoodContainer>
    }


    if(this.state.isClickedModal === false) {
      ModalJournal = 
      <ModalJournalContainer>
        <ModalJounralWrapper>
          <h1 style={{textAlign: 'center', marginTop: '20px', marginBottom: '30px', fontSize: '1.6rem'}}>Prends quelques minutes pour répondre aux questions !</h1>

          <QuestionContainer>
          {this.state.questions.map((question, index)=>{
            return(
              <QuestionFlex key={index} {...question} onClick={this.onChangeState}></QuestionFlex>
            )
          })}
          </QuestionContainer>
          <div style={{ position: 'relative' }}>
            <TextInputTitle
            >Besoin d'un moment d'écriture ? Raconte ici ta journée :)</TextInputTitle>
            <TextInput 
              // type="textarea"
              style = {{
                marginTop: '50px'
              }} 
              onChange={(e)=>{
                this.onChangeState('diary', e.target.value)
              }}
            >
            </TextInput>
          </div>
        
          <ButtonContainer>
            <ValidationButton 
              title="Valide tes réponses"
              onClickFn={()=>{
                this.saveMemories();
                this.setState({
                  isClickedModal: true,
                })
              }}>  
            </ValidationButton>
          </ButtonContainer>


        </ModalJounralWrapper>
      </ModalJournalContainer>
    } else if (this.state.answer1 !== "") {
      ModalJournal = "";
    } else {
      ModalJournal = "";
    }




    return (
      <div>

        { ModalJournal }
        { ModalMood }

        <JournalContainer>

          <Link to="/dashboard">
            <BackButton></BackButton>
          </Link>

          {/* <Title>Journal{this.state.moodByDate}</Title> */}

          <JournalWrapper>

            <Calendar
              onChange={this.searchMood}
              value={this.state.date}
            />

          </JournalWrapper>

        </JournalContainer>
      </div>
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
    // position: relative;
  `,
  Title = styled.h1`
    margin-left: 50px;    
  `,
  JournalWrapper = styled.div`
    height: 500px;
    transition: all 1s;
    background-color: white;
    border: 4px solid #313132;
    display: flex;

    @media (max-width: 900px) {
      height: 580px;
    }

    @media (max-width: 600px) {
      height: 600px;
    }
  `

  const
    ModalJournalContainer = styled.div`
      background-color: rgba(0,0,0,0.6);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100vw; 
      height: 100vh;
      color: white;
    `,
    QuestionContainer = styled.div`
      // background-color: black;
      display: flex;
      // flex-direction: row;
      flex-wrap: no-wrap;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      transition: all 1s;

      @media (max-width: 1100px) {
        flex-direction: column;
        flex-wrap: wrap;

      }
    `, 
    ModalJounralWrapper = styled.div`
      width: 80%;
      // background-color: red;
      margin: 200px auto;
      height: 80%;
      transition: 1s all;

      @media(max-width: 800px) {
        margin: 40px auto;
      }
    `,
    ButtonContainer = styled.div`
      width: 400px;
      margin: auto;
      display: flex;
    `

  const
    QuestionItem = styled.div`
      // background-color: green;
      margin-bottom: 80px;
      margin-top: 50px;
      width: 60%;
      max-width: 400px;
      text-align: center;
      transition: all 1s;

      @media (max-width: 1000px) {
        margin-top: 0px;
        margin-bottom: 20px;

      }

      @media (max-width: 600px) {
        width: 100%;
      }
    `,
    SmileyContainer = styled.div`
      margin-top: 10px;
      // background-color: red;
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
    `,
    TextInput = styled.textarea`
      width: 60%;
      border: 4px solid #232320;
      height: 50px;
      border-radius: 20px;
      margin: 70px 19% 20px 19%;
      transition: all 0.5s;
      padding: 1% 1%;
      font-size: 1.2rem;

      @media (max-width: 900px) {
        width: 90%;
        margin: 70px 4% 20px 4%;
      }
    `,
    TextInputTitle = styled.div`
      position: absolute;
      left: 20%;
      text-align: justify;
      background-color: #FFF58D;
      padding: 2px 5px;
      top: 20px;
      font-size: 1.2rem;
      z-index: 5;
      border: 4px solid white;
      font-weight: bold;
      color: #313132;
      transition: all 1s;

      @media ( max-width: 900px) {
        left: -20px;
        top: 10px;
      }

      @media ( max-width: 800px) {
        top: 20px;
      }

      @media ( max-width: 600px) {
        left: -10px;
        top: 0px;
      }
    `
  const ModalMoodContainer = styled.div`
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100vw; 
    height: 100vh;
    color: white;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `,
  ModalMoodContainerTitle = styled.h2`
    margin-bottom: 30px;
    font-size: 1.8rem;
  `,
  MoodQuestionContainer = styled.div`
      // background-color: red;
      margin-bottom : 20px;
      font-size: 1.4rem;
      width: 300px;
  `,
  MoodWrapper = styled.div`
      width: 80%;
      margin: 20px auto;
      transition: all 1s;
  `,
  SmileyMoodContainer = styled.div`
      height: 140px;
      border-radius: 100px;
      border: 4px solid #313132;
      width: 140px;
      margin: 0 auto 40px auto;
  `,
  SmileyMoodContainerSmall = styled.div`
    height: 50px;
    border-radius: 100px;
    border: 4px solid #313132;
    width: 50px;
    margin: auto;
  `,
  Ecriture = styled.p`
    width: 80%;
    margin: auto;
    border: 4px solid #313132;
    background-image: url(${grid});
    background-size: 100%;
    border-radius: 4px;
    background-color: white;
    padding: 10px 10px;
    color: #313132;
    margin-bottom: 40px;
    text-align: left;
    font-size: 1.4em;
  `

export default Journal;
