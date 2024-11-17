import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 5%;
  @media screen and (max-width: 767px) {
    padding: 30px 5%;
  }

  .prod-card {
    cursor: pointer;
    padding: 0 10px;

    img {
      margin: 0 auto;
      width: 100%;
      height: 300px;
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
      @media screen and (max-width: 1023px) {
        display: block;
      }
    }

    &:hover {
      background: #ccc;
      padding-bottom: 10px;

      button {
        display: block;
      }
    }

    .stars {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }
  .slick-dots {
      @media screen and (max-width: 767px) {
        bottom: -25px;
      }
    }
`;