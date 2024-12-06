import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

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

interface MinicartCounterProps {
  prodQuantity: number;
  boughtProds?: { prod: Product, qtty: number }[] | undefined;
}
export default function MinicartCounter(props: MinicartCounterProps) {

  const { boughtProds } = useContext(CartContext);

  console.log("boughtProds", boughtProds);

  return (
    <div>
      {props.prodQuantity}
    </div>
  );
}