import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "../../interfaces/Product";

interface MinicartCounterProps {
  prodId: number;
  prodQtty: number;
}

export default function MinicartCounter(props: MinicartCounterProps) {
  //localStorage.setItem("Cart Prods", JSON.stringify(checkoutCartArray));
  const { boughtProds, setCartQuantity } = useContext(CartContext);
  //console.log("id", props.prodId);

  const currentProd = boughtProds?.find(prod => prod.id === props.prodId);

  let checkoutCartArray: any = JSON.parse(localStorage.getItem("Cart Prods")!) || [];

  function increaseProdQtty(currentProd?: Product) {
    if (currentProd) {
      currentProd.qtty = currentProd.qtty + 1;
      // checkoutCartArray.find((item: Product, index: number) => {});
      checkoutCartArray.push(
        currentProd);
      console.log("INCREASED", currentProd)
      localStorage.setItem("Cart Prods", JSON.stringify(checkoutCartArray));
      setCartQuantity(currentProd.qtty);
    }
  }

  function decreaseProdQtty(currentProd?: Product) {
    if (currentProd && currentProd.qtty > 0) {
      currentProd.qtty = currentProd.qtty - 1;
      checkoutCartArray.push(
        currentProd);
      console.log("INCREASED", currentProd)
      localStorage.setItem("Cart Prods", JSON.stringify(checkoutCartArray));
      console.log("DECREASED", currentProd)
      setCartQuantity(currentProd.qtty);
    }
  }

  return (
    <div>
      <button id="increase" onClick={() => {
        increaseProdQtty(currentProd)
      }}>+</button>
      <input type="number" placeholder={`${props.prodQtty}`} />
      <button id="decrease" onClick={() => {
        decreaseProdQtty(currentProd)
      }}>-</button>
    </div>
  );
}