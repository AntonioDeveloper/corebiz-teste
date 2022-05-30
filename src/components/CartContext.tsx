import { createContext, useState, ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({});

export function CartProvider({ children }: CartProviderProps) {
  const [boughtProds, setBoughtProds] = useState(4);
  const providerValue = {
    boughtProds, setBoughtProds
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}