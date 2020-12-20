import styled from 'styled-components';
import valorantLogo from '../../assets/valorant-logo.jpg';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background: url(${valorantLogo}) center no-repeat;
  background-size: cover;

  transform: scale(0);

  position: absolute;
  left: 46.9%;
  top: 44%;

  &:active {
    box-shadow: 0 0 0 40px #3c759d;
  }

  &:hover {
    box-shadow: 0 7px 0 40px #538fb9;
  }

  &::after {
    content: "VALORANT";
    font-size: 24px;
    color: #eee;

    position: absolute;
    top: 110px;
    left: -11.5px;
  }
`;