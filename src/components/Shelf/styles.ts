import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 5%;

  .prod-card {
    cursor: pointer;
    padding: 0 10px;

    img {
      margin: 0 auto;
    }

    p {
      text-align: center;
      margin: 10px 0;
    }

    h4 {
      text-align: center;
    }

    button {
      border: none;
      border-radius: 5px;
      background: #000;
      padding: 5px 10px;
      width: 125.28px;
      height: 32.42px;
      color: #fff;
      position: relative;
      left: 25%;
      display: none;
    }

    &:hover {
      background: #ccc;

      button {
        display: block;
      }
    }

  }
`;