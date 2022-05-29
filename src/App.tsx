import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { News } from "./components/News";
import { Shelf } from "./components/Shelf";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Shelf />
      <News />
      <Footer />
      <GlobalStyle />
    </>
  );
}


