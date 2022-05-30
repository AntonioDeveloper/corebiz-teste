import { Container } from "./styles";
import axios from 'axios';
import { useState } from 'react';

type SendEmail = {
  name: string;
  email: string;
}

export function News() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const onChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const onChangeInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(name, email)

    async function sendEmail() {
      try {
        const { data } = await axios.post<SendEmail>(
          "https://corebiz-test.herokuapp.com/api/v1/newsletter",
          {
            name: name,
            email: email
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );

        console.log(JSON.stringify(data, null, 4));

        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'Ocorreu um erro inesperado';
        }
      }
    }
    sendEmail();
  }

  return (
    <Container>
      <h2>Participe de nossas news com promoções e novidades!</h2>
      <form onSubmit={onSubmit}>
        <input type="text" id="name" name="name" onChange={onChangeInputName} placeholder="Digite seu nome" required />
        <input type="email" id="email" name="email" onChange={onChangeInputEmail} placeholder="Digite seu email" required />
        <button type="submit">Eu quero!</button>
      </form>
    </Container>
  )

}


// import { Container } from "./styles";
// import axios from 'axios';

// type SendEmail = {
//   name: string;
//   email: string;
// }

// export function News() {

//   async function sendEmail(event: React.MouseEvent<HTMLButtonElement>) {
//   event.preventDefault();

  // try {
  //   const { data } = await axios.post<SendEmail>(
  //     "https://corebiz-test.herokuapp.com/api/v1/newsletter",
  //     { name: "ANTONIO", email: "junior@gmail.com" },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     },
  //   );

  //   console.log(JSON.stringify(data, null, 4));
  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'Ocorreu um erro inesperado';
  //   }
  // }
// }
//   return (
//     <Container>
//       <h2>Participe de nossas news com promoções e novidades!</h2>
//       <form>
//         <input type="text" placeholder="Digite seu nome" id="name" name="name" />
//         <input type="email" placeholder="Digite seu email" id="email" name="email" />
//         <button type="submit" onClick={sendEmail}>Eu quero!</button>
//       </form>
//     </Container>
//   )
// }