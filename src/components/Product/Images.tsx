interface Image {
  images: string;
}
export default function Images(props: Image) {

  return (
    <div>
      <img src={props.images} alt="Product" />
    </div>
  )
}