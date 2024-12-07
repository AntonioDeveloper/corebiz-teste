import { Container } from "./styles";
import { useEffect, useState, useContext } from 'react';
import { api } from "../../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../../context/CartContext";
import imgStarFilled from "../../assets/star-filled.svg";
import { NavLink } from "react-router-dom";
import Product from "../../interfaces/Product";

export function Shelf() {

  const { boughtProds, setBoughtProds } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
  }, []);

  function star(rating: number) {
    const starFilled = document.createElement("img")!;
    starFilled.setAttribute("src", imgStarFilled);
    let htmlArray = [];

    for (let i = rating; i > 0; i--) {
      htmlArray.push(starFilled);
    }

    return htmlArray.map((h, i) => (
      <span key={i}><img src={h.currentSrc} /></span>
    ))
  }

  //{ prod, qtty: +1 }

  function updateCart(e: any, prod: Product) {

    e.target.innerText = "NO CARRINHO";

    if (boughtProds && boughtProds?.length >= 0) {

      prod.qtty = +1;

      setBoughtProds?.([...boughtProds, prod]);

      e.target.disabled = true;

    }
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
            <div>
              <NavLink to={`/product?prod=${prod.id}`}>
                VER PRODUTO
              </NavLink>
              <button
                type="button"
                onClick={(e) => {
                  updateCart(e, prod);
                }}
              >ADICIONAR AO CARRINHO</button>
            </div>
          </div>)
        )}
      </Slider>
    </Container >
  )
}