import Featured from "@/component/Featured";
import Header from "@/component/Header";
import NewProducts from "@/component/NewProducts";
import { Product } from "@/models/Products";
import mongoose from "mongoose";

export default function HomePage({ featuredProduct, newProducts }) {
  console.log({ newProducts });
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  //1.链接mongodb 2.获取id 3.找到id 4.return props 5.HomePage接收props
  const mongoUrl = process.env.MONGODB_URL;
  mongoose.connect(mongoUrl);
  const featureProductId = "65ef19170f36cd21da20c549";
  const featuredProduct = await Product.findById(featureProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  }); //这里
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
  featuredProduct;
}
