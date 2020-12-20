import styled from 'styled-components';

export const Click = styled.div`
  .icons {
    position: absolute;
    right: 200px;

    display: flex;

    color: #eee;
    cursor: pointer;
    user-select: none;

    & :last-child:hover {
      border-top-right-radius: 8px;
      background-color: rgba(230, 0, 0, 0.7);
    }

    div {
      box-sizing: unset;
      width: 25px;
      height: 17px;
      
      background: transparent;
      padding: 10px;
      text-align: center;
      font-weight: 500;

      &:hover {
        background: rgba(200,200,200,0.3);
      }
    }
  }

  .config {
    i {
      position: absolute;
      bottom: 86px;
      right: 240px;

      color: #eee;
      background-color: rgba(256,256,256,0.3);
      border-radius: 3px;
      padding: 10px;

      font-size: 18px;
      cursor: pointer;
    }
  }
`;