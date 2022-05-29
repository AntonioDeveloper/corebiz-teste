import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 146px;
  padding: 50px 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  form { 
    margin-top: 10px;
    width: 64%;
    display: flex;
    justify-content: space-evenly;

    input {
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 280px;

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
      }
  }
`;