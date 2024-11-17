import { Container } from "./styles";
import { useEffect, useState, useContext } from 'react';
import { api } from "../../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../CartContext";
import imgStarFilled from "../../assets/star-filled.svg"

interface Product {
  image: string;
  installments: {
    quantity: number;
    value: number;
  }[];
  price: number;
  id: number;
  title: string;
  rating: { count: number, rate: number };
  star(rating: number): any;
  htmlArray: {
    currentSrc: string;
  }[];
}

interface DataObj {
  boughtProds?: number;
  setBoughtProds?: (counter: any) => any;
}

export function Shelf() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [products, setProducts] = useState<Product[]>([]);
  const { boughtProds, setBoughtProds } = useContext<DataObj>(CartContext);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
  }, []);

  console.log("PRODS", products);

  function star(rating: number) {
    const starFilled = document.createElement("img")!;
    starFilled.setAttribute("src", imgStarFilled);
    let htmlArray = [];

    for (let i = rating; i > 0; i--) {
      htmlArray.push(starFilled);
    }

    //console.log(htmlArray)

    return htmlArray.map(h => (
      <span><img src={h.currentSrc} /></span>
    ))
  }

  function updateCart() {
    setBoughtProds?.((counter: any) => counter + 1);
    console.log(boughtProds);
  }

  return (
    <Container>
      <h3>Mais vendidos</h3>
      <Slider {...settings}>
        {products.map(prod => (
          <div className='prod-card' key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <p>{prod.title}</p>
            <div className="rating">
              <>
                {star(prod.rating.rate)}
              </>
            </div>
            <h4>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL", maximumFractionDigits: 2 }).format(prod.price)}</h4>
            <button
              type="button"
              onClick={updateCart}
            >COMPRAR</button>
          </div>)
        )}
      </Slider>
    </Container>
  )
}