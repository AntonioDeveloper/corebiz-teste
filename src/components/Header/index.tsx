import { useContext } from 'react';
import imgLogo from '../../assets/corebiz-logo.svg';
import imgMagLens from '../../assets/mag-lens.svg';
import imgUser from '../../assets/user.svg';
import imgShopCart from '../../assets/shopping-cart.svg';
import { Container } from './styles';
import { CartContext } from '../../context/CartContext';
import useToggle from '../../Hooks/useToggle';
import { Minicart } from '../Minicart/Minicart';

interface Product {
  image: string;
  installments: {
    quantity: number;
    value: number;
  }[];
  price: number;
  id: number;
  title: string;
  description: string;
  rating: { count: number, rate: number };
  star(rating: number): any;
  htmlArray: {
    currentSrc: string;
  }[];
}

interface DataObj {
  boughtProds?: number;
  cartQuantity?: number;
}

// interface CartContextProps {
//   boughtProds?: { props: Product, qtty: number }[];
//   cartQuantity: number;
//   setBoughtProds: (prod: any) => void;
//   setCartQuantity: (qtty: number) => void;
// }

export function Header() {
  const data = useContext(CartContext);
  const totalItems = data?.boughtProds?.reduce(function (acc, curr) {
    return acc + curr.qtty
  }, 0);

  const [showMiniCart, toggleMiniCart] = useToggle(false);

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
      <button className="shopCartButton" onClick={toggleMiniCart}>
        <img src={imgShopCart} alt="shop cart" />
        <span>{totalItems}</span>
      </button>
      {
        showMiniCart === true
          ?
          <Minicart />
          :
          ""
      }
    </Container>
  )
}