import Images from "../components/Product/Images";
import ProductSection from "../components/Product/ProductSection";
import Layout from "../layout/Layout";
import { api } from "../services/api";
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

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

const defaultProduct: Product = {
  image: '',
  installments: [],
  price: 0,
  id: 0,
  title: '',
  description: '',
  rating: { count: 0, rate: 0 },
  star: (rating: number) => { },
  htmlArray: [],
};
export default function Product() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProd, setSelectedProd] = useState(defaultProduct);

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const queryId = query.get("prod");

  useEffect(() => {
    api.get('/products')
      .then(resp => {
        setProducts(resp.data);
      });
  }, []);

  useEffect(() => {
    chosenProd();
  }, [products]);

  function chosenProd() {
    const foundProd = products.find((p: any) => p.id == queryId);
    if (foundProd) {
      setSelectedProd(foundProd);
    } else {
      return;
    }
  }
  console.log("SEL PRODS", selectedProd);

  return (
    <>
      <ProductSection selectedProduct={selectedProd} />
    </>
  )
}