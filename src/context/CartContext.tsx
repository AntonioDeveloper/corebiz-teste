import { createContext, useState, useEffect, ReactNode } from 'react';

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

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  boughtProds?: { props: Product, qtty: number }[];
  cartQuantity: number;
  setBoughtProds: (prod: any) => void;
  setCartQuantity: (qtty: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [boughtProds, setBoughtProds] = useState([]);
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