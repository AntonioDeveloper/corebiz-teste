import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: #fff;
  width: 100%;
  height: 80px;
  padding: 20px 10px;
  @media screen and (max-width: 767px) {
    padding: 5px 5%;
  }

  img {
    max-width: 171px;
    @media screen and (max-width: 767px) {
      max-width: 102px;
      position: absolute;
      top: 10px;
    }
  }

  .searchBarStyle {
    width: 50%;
    @media screen and (max-width: 767px) {
      width: 90%;
      display: block;
      position: absolute;
      top: 50px;
      margin-left: 5%;
    }

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
        @media screen and (max-width: 767px) {
          top: -27px;
        }
      }
  }

  .myAccountButton {
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
      display: none;
    }

    img {
      margin-right: 5px;
    }
  }

  .shopCartButton {
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
      position: absolute;
      right: 5%;
      top: 10px;
      width: 50px;
    }

      img {
        margin-right: 5px;
        @media screen and (max-width: 767px) {
          position: absolute;
          top: 0;
        }
      }

      span {
        background: red;
        padding: 2px 8px;
        border-radius: 50px;

        color: #fff;

        @media screen and (max-width: 767px) {
          margin-left: 25px;
        }
      }
    }
`;