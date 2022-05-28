import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: #fff;
  width: 100%;
  height: 80px;
  padding: 20px 10px;

  img {
    max-width: 171px;
  }

  .searchBarStyle {
    width: 50%;

      input { 
        width: 90%;
        border-top: 0;
        border-right: 0;
        border-left: 0;
        border-bottom: 1px solid #7A7A7A;
        &:focus {
          outline: none;
        }
      }

      button { 
        border: none;
        background: none;
        position: relative;
        left: -20px;
      }
  }

  .myAccountButton {
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }

  .shopCartButton {
    display: flex;
    align-items: center;

      img {
        margin-right: 5px;
      }

      span {
        background: red;
        padding: 2px 8px;
        border-radius: 50px;

        color: #fff;
      }
    }
`;