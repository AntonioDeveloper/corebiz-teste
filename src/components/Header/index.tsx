import imgLogo from '../../assets/corebiz-logo.svg';
import imgMagLens from '../../assets/mag-lens.svg';
import imgUser from '../../assets/user.svg';
import imgShopCart from '../../assets/shopping-cart.svg';
import { Container } from './styles';

export function Header() {
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
        <span>0</span>
      </div>
    </Container>
  )
}