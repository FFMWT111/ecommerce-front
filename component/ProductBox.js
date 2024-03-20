import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WhiteBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfo = styled.div`
  margin-top: 6px;
  font-family: "Gill Sans";
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt="" />
      </WhiteBox>
      <ProductInfo>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            $displayStyle="block"
            onClick={() => addProduct(_id)}
            $custom="green"
            $outline="transparent"
          >
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfo>
    </ProductWrapper>
  );
}
