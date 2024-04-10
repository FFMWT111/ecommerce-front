import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import Mac from "./images/images.jpg";

const Bg = styled.div`
  background: hsla(0, 0%, 13%, 1);

  background: linear-gradient(
    90deg,
    hsla(0, 0%, 13%, 1) 0%,
    hsla(0, 0%, 20%, 1) 97%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(0, 0%, 13%, 1) 0%,
    hsla(0, 0%, 20%, 1) 97%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(0, 0%, 13%, 1) 0%,
    hsla(0, 0%, 20%, 1) 97%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#222222", endColorstr="#343434", GradientType=1 );
  // background-color: #222;
  color: #fff;
  padding: 50px 0;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={"/products/" + product._id}
                  $mode="white"
                  $outline="transparent"
                >
                  Read more
                </ButtonLink>
                <Button $mode="primary" onClick={addFeaturedToCart}>
                  <ShoppingCartIcon />
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <Image src={Mac} alt="mac" width={700} height={350} />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
