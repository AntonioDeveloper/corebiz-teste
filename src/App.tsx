import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Layout from './layout/Layout';
export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/product`} element={<Product />} />
        <Route path={`/checkout`} element={<Checkout />} />
      </Routes>
    </Layout>
  );
}


