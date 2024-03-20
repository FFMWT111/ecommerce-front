import styled, { css } from "styled-components";

export const ButtonStyle = css`
  display: inline-flex;
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;

  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) => {
    switch (props.$displayStyle) {
      case "block":
        return css`
          display: block;
          width: 100%;
        `;
    }
  }}

  ${(props) => {
    switch (props.$mode) {
      case "primary":
        return css`
          background-color: #5542f6;
          border: solid 2px #5542f6;
          color: white;
        `;
      case "white":
        return css`
          background-color: #fff;
          border: solid 1px #fff;
          color: #fff;
        `;
      case "black":
        return css`
          background-color: #000;
          border: solid 1px #000;
          color: white;
        `;
    }
  }}
  ${(props) => {
    switch (props.$size) {
      case "l":
        return css`
          font-size: 1.2rem;
          padding: 10px 20px;
        `;
    }
  }}
    ${(props) => {
    switch (props.$outline) {
      case "transparent":
        return css`
          background-color: transparent;
        `;
    }
  }};
  ${(props) => {
    switch (props.$custom) {
      case "green":
        return css`
          color: #455a64;
          border: solid 1px #455a64;
        `;
      case "greenPrimary":
        return css`
          color: white;
          background-color: #455a64;
        `;
    }
  }}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
