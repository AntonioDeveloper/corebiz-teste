import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container } from "./style";
import MinicartCounter from "./MinicartCounter";

interface Product {
  image: string;
  installments: {
    quantity: number;
    value: number;
  }[];
  price: number;
  id: number;
  title: string;
  rating: { count: number, rate: number };
  star(rating: number): any;
  htmlArray: {
    currentSrc: string;
  }[];
}

interface DataObj {
  boughtProds?: { props: Product, qtty: number }[];
}

export function Minicart() {

  const data: DataObj = useContext(CartContext);
  const { setCartQuantity } = useContext<any>(CartContext);
  const cartData = data;
  console.log("data minicart", cartData.boughtProds);

  return (
    <Container>
      <ul>
        {
          cartData.boughtProds?.map((c) => {
            return (
              <li key={c.props.id}>
                <div>
                  <img src={c.props.image} />
                </div>
                <div>
                  <h3>{c.props.title}</h3>
                  <p>
                    {new Intl.NumberFormat('pt-BR',
                      {
                        style: "currency",
                        currency: "BRL",
                      }).format(c.props.price)}
                  </p>
                </div>
                <MinicartCounter prodQuantity={c.qtty} />
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}