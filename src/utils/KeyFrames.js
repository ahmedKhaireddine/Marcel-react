import styled, { keyframes } from 'styled-components';

const 
  keyFrameBallonRespiration = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.4) translateY(15px);
    }
    100% {
      transform: scale(1);
    }
  `,
  keyFrameCloudRespiration = keyframes`
    0% {
      background-color: #b6e4ed;
      background-position: 0%;
    }
    50% {
      background-color: #8fc9d3;
    }
    100% {
      background-color: #b6e4ed;
      background-position: -10000%;
    }
  `,
  keyFrameBallonPageRespiration = keyframes`
    0%{
      transform: rotate(6deg);
    }
    50%{
      transform: rotate(-6deg) scale(1.15);
    }
    100%{
      transform: rotate(6deg);
    }
  `,
  keyFrameMarcelPageRespiration = keyframes`
    0%{
      transform: scale(0.9);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(0.9);
    }
  `,
  keyFrameFiller = keyframes`
    0%{
      height: 0%;
    }
    50%{
      height: 100%;
    }
    100%{
      height: 0%;
    }
  `,
  keyFrameArrow = keyframes`
    0%{
      transform: rotate(-8deg);
    }
    50%{
      transform: rotate(-14deg) scale(1.15);
    }
    100%{
      transform: rotate(-8deg);
    }
  `

export { 
  keyFrameBallonRespiration, 
  keyFrameCloudRespiration, 
  keyFrameBallonPageRespiration, 
  keyFrameMarcelPageRespiration,
  keyFrameFiller,
  keyFrameArrow
}