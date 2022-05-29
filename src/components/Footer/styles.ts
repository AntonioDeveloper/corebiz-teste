import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 213px;
  background: #000;
  padding: 30px 5%;

  display: flex;

  .local,
  .contact,
  .logos {
    width: 33.33%;
    color: #fff;

  }

  .local {
    ul {
      list-style-type: none;
      margin-top: 10px;
      li { 
        padding: 2px 0;
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: 195px;
      min-height: 38px;
      padding: 5px 0;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;

      border-radius: 5px;

      img {
        margin-right: 5px;
      }
    }
    
    button:nth-child(2) {
      margin-top: 10px;
      
      img {
        position: relative;
        left: 20px;
      }
    }
  }

  .logos {
    display: flex;
    justify-content: center;
    align-items: center;

    .core {
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      
      span {
        font-size: 10px;
      }

      img {
        width: 71px;
      }
    }

    .vtex {
      display: flex;
      flex-direction: column;
      
      span {
        font-size: 10px;
      }

      img {
        width: 52px;
      }
    }
  }
`;
