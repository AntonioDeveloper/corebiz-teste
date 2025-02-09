import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container } from "./style";
import MinicartCounter from "./MinicartCounter";

export function Minicart() {

  const { boughtProds } = useContext(CartContext);

  return (
    <Container>
      <ul>
        {
          boughtProds?.map((c) => {
            return (
              <li key={c.id}>
                <div>
                  <img src={c.image} />
                </div>
                <div>
                  <h3>{c.title}</h3>
                  <p>
                    {new Intl.NumberFormat('pt-BR',
                      {
                        style: "currency",
                        currency: "BRL",
                      }).format(c.qtty * c.price)}
                  </p>
                </div>
                <MinicartCounter prodId={c.id} prodQtty={c.qtty} />
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}