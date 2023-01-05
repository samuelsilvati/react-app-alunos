import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Container = styled.div`
  #container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #fountainG {
    position: relative;
    width: 234px;
    height: 28px;
    z-index: 2;
  }

  .fountainG {
    position: absolute;
    top: 0;
    background-color: rgb(195, 7, 63);
    width: 28px;
    height: 28px;
    animation-name: bounce_fountainG;
    -o-animation-name: bounce_fountainG;
    -ms-animation-name: bounce_fountainG;
    -webkit-animation-name: bounce_fountainG;
    -moz-animation-name: bounce_fountainG;
    animation-duration: 1.5s;
    -o-animation-duration: 1.5s;
    -ms-animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;
    -moz-animation-duration: 1.5s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    transform: scale(0.3);
    -o-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    border-radius: 19px;
    -o-border-radius: 19px;
    -ms-border-radius: 19px;
    -webkit-border-radius: 19px;
    -moz-border-radius: 19px;
  }

  #fountainG_1 {
    left: 88px;
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }

  #fountainG_2 {
    left: 117px;
    animation-delay: 0.75s;
    -o-animation-delay: 0.75s;
    -ms-animation-delay: 0.75s;
    -webkit-animation-delay: 0.75s;
    -moz-animation-delay: 0.75s;
  }

  #fountainG_3 {
    left: 146px;
    animation-delay: 0.9s;
    -o-animation-delay: 0.9s;
    -ms-animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
  }

  @keyframes bounce_fountainG {
    0% {
      transform: scale(1);
      background-color: rgb(195, 7, 63);
    }

    100% {
      transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }

  @-o-keyframes bounce_fountainG {
    0% {
      -o-transform: scale(1);
      background-color: rgb(195, 7, 63);
    }

    100% {
      -o-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }

  @-ms-keyframes bounce_fountainG {
    0% {
      -ms-transform: scale(1);
      background-color: rgb(195, 7, 63);
    }

    100% {
      -ms-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }

  @-webkit-keyframes bounce_fountainG {
    0% {
      -webkit-transform: scale(1);
      background-color: rgb(195, 7, 63);
    }

    100% {
      -webkit-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }

  @-moz-keyframes bounce_fountainG {
    0% {
      -moz-transform: scale(1);
      background-color: rgb(195, 7, 63);
    }

    100% {
      -moz-transform: scale(0.3);
      background-color: rgb(255, 255, 255);
    }
  }
`;
