import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

import { Bars3Icon } from "@heroicons/react/24/outline";

const StyledHeader = styled.header`
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
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
  //   rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
  //   rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: ${(props) => (props.$showSide ? "none" : "block")};
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  function changeButtonEvent() {
    setMobileNavActive((prev) => !prev);
    console.log(mobileNavActive, "1111");
  }
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav $showSide={mobileNavActive ? true : false}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>
              Cart ({cartProducts?.length > 0 ? cartProducts?.length : 0})
            </NavLink>
          </StyledNav>
          <NavButton onClick={changeButtonEvent}>
            <Bars3Icon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
