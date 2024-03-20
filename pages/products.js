import Center from "@/component/Center";
import Header from "@/component/Header";
import ProductsGrid from "@/component/ProductsGrid";
import Title from "@/component/Title";
import { Product } from "@/models/Products";
import mongoose from "mongoose";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  const mongoUrl = process.env.MONGODB_URL;
  mongoose.connect(mongoUrl);
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
