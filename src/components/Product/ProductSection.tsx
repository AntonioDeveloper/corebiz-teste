import Images from "./Images";
import { Container } from "./styles";
import imgStarFilled from '../../assets/star-filled.svg';

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

interface SelectedProductProps {
  selectedProduct: Product
}

export default function ProductSection(props: SelectedProductProps) {

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

  function updateCart() {

  }

  return (
    <Container>
      <aside className="product-details-image">
        <Images images={props.selectedProduct.image} />
      </aside>
      <div className="product-details-description">
        <h1>{props.selectedProduct.title}</h1>
        <p className="description">
          {props.selectedProduct.description}
        </p>
        <div className="rating">
          <>
            {star(props.selectedProduct.rating.rate)}
          </>
        </div>
        <div className="price">
          <p>{new Intl.NumberFormat(
            'pt-BR',
            {
              style: "currency",
              currency: "BRL",
            }
          ).format(props.selectedProduct.price)}</p>
          <button
            type="button"
            onClick={() => console.log("SELECIONADO", props.selectedProduct)}
          >ADICIONAR AO CARRINHO</button>
        </div>
      </div>
    </Container>
  )
}