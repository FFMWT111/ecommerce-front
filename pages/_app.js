import { CartContextProvider } from "@/component/CartContext";
import { createGlobalStyle } from "styled-components";
// @import url(http://fonts.googleapis.com/css?family=PT+Sans);
const GlobalStyles = createGlobalStyle`
body{
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
