import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
  gap: 20px;

  .product-details-image {
    width: 30%;
    height: 100%;

    div {
      width: 100%;
      /* height: 100%;   */
      
      img {
        width: 100%;
      }
    }
  }

  .product-details-description {
    width: 50%;
    height: 100%;
  }
`