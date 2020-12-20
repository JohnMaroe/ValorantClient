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
  box-shadow: inset 100px 0 100px 20px rgba(0,0,0);
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.3);

  .img-shadow {
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 0 80px rgba(0,0,0) inset;
  }
`;