import { Banner } from "./components/Banner";
import { CartProvider } from "./components/CartContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { News } from "./components/News";
import { Shelf } from "./components/Shelf";
import { GlobalStyle } from "./styles/global";

interface News {
  onSubmitUser: (username: string) => void;
}

export function App() {
  return (
    <CartProvider>
      <Header />
      <Banner />
      <Shelf />
      <News />
      <Footer />
      <GlobalStyle />
    </CartProvider>
  );
}


