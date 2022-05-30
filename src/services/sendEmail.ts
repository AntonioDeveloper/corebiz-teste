import axios from 'axios';

type SendEmail = {
  name: string;
  email: string;
}

export async function sendEmail(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();

  try {
    const { data } = await axios.post<SendEmail>(
      "https://corebiz-test.herokuapp.com/api/v1/newsletter",
      { name: "ANTONIO", email: "junior@gmail.com" },
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
