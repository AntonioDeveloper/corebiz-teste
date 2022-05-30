import { createContext, useState, useEffect, ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({});

export function CartProvider({ children }: CartProviderProps) {
  const [boughtProds, setBoughtProds] = useState(JSON.parse(localStorage.getItem('cartQuantity')!));

  useEffect(() => {
    localStorage.setItem('cartQuantity', JSON.stringify(boughtProds))
  }, [boughtProds]);

  const providerValue = {
    boughtProds, setBoughtProds
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}