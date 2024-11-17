import styled from 'styled-components'

export const Container = styled.div`
width: 300px;
height: auto;
padding: 10px;
display: flex;
position: absolute;
z-index: 1;
top: 70px;
right: 0;
background: #fff;

ul {
  li{
    list-style: none;
    display: flex;

    img {
      width: 80px;
      height: 80px;
    }
  }
}
`