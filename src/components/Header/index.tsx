import { useContext } from 'react';
import imgLogo from '../../assets/corebiz-logo.svg';
import imgMagLens from '../../assets/mag-lens.svg';
import imgUser from '../../assets/user.svg';
import imgShopCart from '../../assets/shopping-cart.svg';
import { Container } from './styles';
import { CartContext } from '../CartContext';

interface DataObj {
  boughtProds?: number;
}

export function Header() {
  const data: DataObj = useContext(CartContext);
  const dataNum = data.boughtProds;
  console.log(dataNum)

  return (
    <Container>
      <img src={imgLogo} alt="Corebiz logo" />
      <div className="searchBarStyle">
        <form>
          <input type="text" placeholder="O que está procurando?" />
          <button type="submit"><img src={imgMagLens} /></button>
        </form>
      </div>
      <div className="myAccountButton">
        <img src={imgUser} alt="user" />
        <span>Minha Conta</span>
      </div>
      <div className="shopCartButton">
        <img src={imgShopCart} alt="shop cart" />
        <span>{dataNum}</span>
      </div>
    </Container>
  )
}