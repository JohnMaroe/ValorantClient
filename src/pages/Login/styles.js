import styled from 'styled-components';
import img from '../../assets/vlr-bg.png';

export const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353a45;
`;

export const Main = styled.div`
  width: 75%;
  height: 80%;

  min-width: 700px;
  min-height: 700px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background: url(${img}) center no-repeat;
  background-size: 99.7% 100%;
  border-radius: 8px;
  box-shadow: inset 100px 0 100px 20px rgba(0,0,0);
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.3);

  .img-shadow {
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 0 85px 20px rgba(0,0,0) inset;
  }
`;

export const Form = styled.div`
  width: 32%;
  min-width: 350px;
  height: 100%;
  background-color: #fbfbfb;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 55px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;

    img {
      width: 38px;
      height: 38px;
      user-select: none;
      -webkit-user-drag: none;
      -moz-window-dragging: none;
    }

    i {
      position: relative;
      opacity: 0.5;

      &:hover ~ div  {
        transform: scale(1);
        transition: ease 0.2s;
      }
    }

    div {
      position: absolute;
      left: 518px;
      top: 93px;

      transform: scale(0);
      background-color: #fbfbfb;
      width: 320px;
      height: 175px;

      padding: 24px;
      
      border: none;
      border-radius: 3.5px;
      box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);

      font-size: 14px;

      &::before {
        content: "";
        width: 13px;
        height: 13px;
        background-color: #fbfbfb;
        transform: rotate(45deg);

        position: absolute;
        left: -4px;
        top: 10px;
      }

      strong {
        color: red;
        cursor: pointer;
      }

      &:hover {
        display: block;
      }
    }
  }

  section {
    width: 100%;
    margin-top: 65px;

    h2 {
      font-weight: 600;
      text-align: center;
    }

    form {
      margin-top: 25px;
      display: flex;
      flex-direction: column;

      .input-box {
        position: relative;
        margin-bottom: 20px;
        background: #ededed;
        border-radius: 5px;

        width: 100%;
        height: 50px;

        padding: 20px 8px 8px;

        font-weight: 600;

        &:hover {
          background: #e7e7e7;
        }

        &:focus {
          border: 2px solid black;
          border-radius: 3px;
        }

        &:focus ~ label, &:valid ~ label {
          margin: 5px;
          margin-left: 2px;
          transform: scale(0.8);
          transition: ease 0.2s;
        }
      }

      .input-text {
        position: absolute;
        margin: 17px;
        left: 260px;

        font-size: 11px;
        font-weight: 800;
        opacity: 0.5;
        cursor: text;
      }

      input[type="checkbox"] {
        display: none;

        & + label div {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #ededed;
          border-radius: 3px;

          margin-right: 8px;
          position: relative;

          &::after {
            content: "";
            width: 5px;
            height: 8px;

            transform: rotate(42deg);

            border-right: 2px solid white;
            border-bottom: 2px solid white;
            position: absolute;
            top: 2.5px;
            left: 6.5px;

            display: none;
          }
        }

        &:checked + label div {
          background: #d13639;
        }

        &:checked + label:hover div {
          background: #bc252a;
        }

        &:checked + label div::after {
          display: block;
        }

        & + label {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;

          &:hover {
            color: rgba(0,0,0,0.8);
          }
        }
      }

      button {
        width: 64px;
        height: 64px;

        border: 2px solid rgba(0,0,0,0.1);
        border-radius: 20px;

        background: #d13639;

        position: relative;
        left: 85px;
        top: 100px;

        cursor: pointer;

        &:disabled {
          background: #fbfbfb;
          pointer-events: none;
        }

        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: 195px;
    left: 54px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-right: 42px;
    }

    span {
      cursor: pointer;
      opacity: 0.5;
      font-weight: 600;
      font-size: 12.6px;

      &:hover {
        font-weight: bolder;
        color: black;
        opacity: 0.8;
      }
    }
  }
`;