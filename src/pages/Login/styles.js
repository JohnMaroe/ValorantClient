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
  background-size: cover;
  border-radius: 8px;
  box-shadow: inset 100px rgba(0,0,0);
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
      opacity: 0.5;
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

        &:hover {
          background: #e7e7e7;
        }

        &:focus {
          border: 2px solid black;
          border-radius: 3px;
        }

        &:focus ~ label {
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

        span {
          width: 20px;
          height: 20px;
        }

        & + label {
          color: red;
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

    span {
      cursor: pointer;
    }
  }
`;