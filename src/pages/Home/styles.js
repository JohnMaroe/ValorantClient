import styled from 'styled-components';

export const HomeStyle = styled.div`
  position: absolute;
  color: white;

  width: 80%;
  min-width: 800px;
  height: 80%;
  min-height: 700px;

  header {
    padding: 32px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        color: rgba(200,200,200, 0.8);
      }
    }

    h3 {
      font-style: 'Poppins';
      font-weight: 600;
      font-size: 26px;

      margin-bottom: 3px;
      margin-right: 8px;
    }

    span {
      font-size: 13px;
      color: #d13639;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: #bc252a;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    &::after {
      content: "";
      position: absolute;
      top: 120px;
      left: 39px;

      width: 34px;
      height: 34px;
      background-color: purple;
      text-align: center;
      transform: rotate(45deg);
    }
  }

  main {
    position: absolute;
    left: 16.5%;
    top: 33%;
    user-select: none;

    h1 {
      color: #eee;

      font-size: 200px;
      font-weight: 800;
      cursor: pointer;

      &:hover {
        color: #bc252a;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      i {
        color: #d13639;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    padding: 50px;
    user-select: none;
    pointer-events: none;

    hr {
    }

    & :first-child {
      width: 90px;
      margin-right: 20px;
      padding-right: 30px;
      border-right: 1px solid #eee;
    }

    & :last-child {
      width: 265px;
      margin-left: 50px;
    }
  }
`;