import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Product from "../interfaces/Product";
import MinicartCounter from "../components/Minicart/MinicartCounter";

export default function Checkout() {

  const { boughtProds } = useContext(CartContext);
  const [localStorageCart, setLocalStorageCart] = useState(JSON.parse(localStorage.getItem("Cart Prods")!));
  const [checkoutProds, setCheckoutProds] = useState(boughtProds);

  useEffect(() => {
    setCheckoutProds(boughtProds);
    setLocalStorageCart(JSON.parse(localStorage.getItem("Cart Prods")!));
    // console.log("checkoutProds", checkoutProds);
    //console.log("LS", JSON.parse(localStorage.getItem("Cart Prods")!));
  }, [boughtProds]);

  console.log("localStorageCart", localStorageCart);

  return (
    <table className="">
      <tbody>
        {
          localStorageCart?.map((prod: Product) => {
            return (
              <tr className="" key={prod.id}>
                <td className="">
                  <img src={prod.image} alt={prod.title} width="100" height="100" />
                </td>
                <td className="">
                  {prod.title}
                </td>
                <td className="">
                  ENTREGA
                </td>
                <td className="">
                  {prod.price}
                </td>
                <td className="">
                  <MinicartCounter prodId={prod.id} prodQtty={prod.qtty} />
                </td>
                <td className="">
                  <span>TOTAL</span>
                  {prod.qtty * prod.price}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}