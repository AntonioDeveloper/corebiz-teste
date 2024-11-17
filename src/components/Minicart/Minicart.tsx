import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Container } from "./style";

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
  boughtProds?: Product[];
}

export function Minicart() {

  const data: DataObj = useContext(CartContext);
  const cartData = data.boughtProds;
  console.log("cart", typeof cartData);
  return (
    <Container>
      <ul>
        {
          cartData?.map((c: Product) => {
            return (
              <li key={c.id}>
                <div>
                  <img src={c.image} />
                </div>
                <div>
                  {c.title}
                </div>
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}