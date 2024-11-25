import { CartProvider } from "../context/CartContext";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { News } from "../components/News";
import { GlobalStyle } from "../styles/global";

interface LayoutProps {
  children: any;
}
export default function Layout(props: LayoutProps) {
  return (
    <CartProvider>
      <Header />
      {props.children}
      <News />
      <Footer />
      <GlobalStyle />
    </CartProvider>
  )
}