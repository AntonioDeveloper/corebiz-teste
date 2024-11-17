import { createContext, useState, useEffect, ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({});

export function CartProvider({ children }: CartProviderProps) {
  const [boughtProds, setBoughtProds] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(boughtProds.length);
  }, [boughtProds]);

  const providerValue = {
    boughtProds, setBoughtProds, cartQuantity
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}