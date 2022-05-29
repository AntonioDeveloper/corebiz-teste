import { Container } from "./styles";

export function News() {
  return (
    <Container>
      <h2>Participe de nossas news com promoções e novidades!</h2>
      <form>
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Digite seu email" />
        <button type="submit">Eu quero!</button>
      </form>
    </Container>
  )
}