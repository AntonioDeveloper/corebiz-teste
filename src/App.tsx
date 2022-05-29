import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Shelf } from "./components/Shelf";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Shelf />
      <GlobalStyle />
    </>
  );
}


