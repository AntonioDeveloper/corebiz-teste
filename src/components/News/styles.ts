import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 146px;
  padding: 50px 5%;
  @media screen and (max-width: 767px) {
    padding: 20px 5%;
    height: 276px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  form { 
    margin-top: 10px;
    width: 64%;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    input {
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 280px;
      @media screen and (max-width: 767px) {
        width: 100%;
      }

      &::placeholder {
        color: #585858;
        font-weight: 700;
      }
    }

    button {
        width: 140px;
        height: 36px;
        background: #000;
        color: #fff;
        border-radius: 5px;
        border: none;
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }
  }
`;