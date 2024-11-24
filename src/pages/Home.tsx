import { Banner } from "../components/Banner";
import { Shelf } from "../components/Shelf";
import Layout from "../layout/Layout";

interface News {
  onSubmitUser: (username: string) => void;
}

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Shelf />
    </Layout>
  )
}