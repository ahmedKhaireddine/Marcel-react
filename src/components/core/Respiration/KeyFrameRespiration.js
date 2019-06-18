import React from 'react';
import styled from 'styled-components';
import attach from '../../../img/attach.svg';
import marcel from '../../../img/marcel.svg';
import phone from '../../../img/phone.svg';
import forest from '../../../img/forest.svg';
import ballon from '../../../img/ballon3.svg';
import { keyFrameMarcelPageRespiration } from '../../../utils/KeyFrames';


class KeyFrameRespiration extends React.Component {
  render () {
    return(
      <GlobalContainer>
        <Marcel>
          <Iphone>
            <Ballon></Ballon>
          </Iphone>
        </Marcel>
        <Attach></Attach>
      </GlobalContainer>
    )
  }
};

const
  GlobalContainer = styled.div`
    // background-color: red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${forest});
    background-size: 400%;
    background-position: center;
  `,
  Attach = styled.div`
    width: 120px;
    height: 60px;
    position: absolute;
    right: -14px;
    top: 30px;
    background-image: url(${attach});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 33;

  `,
  Marcel = styled.div`
    background-image: url(${marcel});
    height: 90px;
    width: 100px;
    margin-top: 165px;
    margin-left: 60px;
    background-size: 100%;
    background-repeat: no-repeat;
    // background-color: green;
    transform: scaleX(-1) rotate(-3deg);
    z-index: 30;

  `,
  Iphone = styled.div`
    // background-color yellow;
    background-image: url(${phone});
    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 170px;
    position: relative;
    left: 80px;
    top: -150px;
    transform: rotate(-7deg);
    z-index: 3;
  `,
  Ballon = styled.div`
    background-image: url(${ballon});
    // background-color: red;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${keyFrameMarcelPageRespiration} 3s ease-in-out infinite;
  `

export default KeyFrameRespiration;