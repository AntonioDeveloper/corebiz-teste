import { Container } from "./styles";
import imgLetter from '../../assets/letter.svg';
import imgHeadPhone from '../../assets/headphone.svg';
import imgCoreLogo from '../../assets/logo-corebiz-branco.svg';
import imgVtexLogo from '../../assets/vtex-logo.svg';


export function Footer() {
  return (
    <Container>
      <div className="local">
        <h3>Localização</h3>
        <ul>
          <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
          <li>Alphavile SP</li>
          <li>brasil@corebiz.ag</li>
          <li>+55 11 3090 1039</li>
        </ul>
      </div>

      <div className="contact">
        <button type="button">
          <img src={imgLetter} alt="Letter" />
          ENTRE EM CONTATO
        </button>

        <button type="button">
          <img src={imgHeadPhone} alt="Headphone" />
          FALE COM O NOSSO CONSULTOR ONLINE
        </button>
      </div>

      <div className="logos">
        <div className="core">
          <span>Created by</span>
          <img src={imgCoreLogo} alt="Corebiz" />
        </div>

        <div className="vtex">
          <span>Powered by</span>
          <img src={imgVtexLogo} alt="Vtex" />
        </div>
      </div>
    </Container>
  )
}