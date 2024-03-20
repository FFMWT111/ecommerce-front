import Button from "@/component/Button";
import { CartContext } from "@/component/CartContext";
import Center from "@/component/Center";
import Header from "@/component/Header";
import ProductImages from "@/component/ProductImages";
import ProductWhiteBox from "@/component/ProductWhiteBox";
import Title from "@/component/Title";
import { Product } from "@/models/Products";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import mongoose from "mongoose";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <ProductWhiteBox>
            <ProductImages images={product.images} />
          </ProductWhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button
                  onClick={() => addProduct(product._id)}
                  $custom="greenPrimary"
                >
                  <ShoppingCartIcon />
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  const mongoUrl = process.env.MONGODB_URL;
  mongoose.connect(mongoUrl);
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
