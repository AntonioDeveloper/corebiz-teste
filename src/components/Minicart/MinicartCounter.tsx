import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "../../interfaces/Product";

interface MinicartCounterProps {
  prodId: number;
  prodQtty: number;
}

export default function MinicartCounter(props: MinicartCounterProps) {

  const { boughtProds, setCartQuantity } = useContext(CartContext);
  //console.log("id", props.prodId);

  const currentProd = boughtProds?.find(prod => prod.id === props.prodId);

  function increaseProdQtty(currentProd?: Product) {
    if (currentProd) {
      currentProd.qtty = currentProd.qtty + 1;
      console.log("INCREASED", currentProd)
      setCartQuantity(currentProd.qtty);
    }
  }

  function decreaseProdQtty(currentProd?: Product) {
    if (currentProd && currentProd.qtty > 0) {
      currentProd.qtty = currentProd.qtty - 1;
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