import { ContextProvider } from "context/Context";
import GlobalStyle from "../styles/GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>

      <GlobalStyle />
    </>
  );
};

export default MyApp;
