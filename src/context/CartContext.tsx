import { createContext, useState, useEffect, ReactNode } from 'react';

import Product from '../interfaces/Product'


interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  boughtProds?: Product[];
  cartQuantity: number;
  setBoughtProds: (prod: any) => void;
  setCartQuantity: (qtty: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [boughtProds, setBoughtProds] = useState<Product[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(boughtProds.length);
  }, [boughtProds]);

  const providerValue = {
    boughtProds, setBoughtProds, cartQuantity, setCartQuantity
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}