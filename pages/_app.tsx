import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { CaverJsReactProvider } from "@sixnetwork/caverjs-react-core";
import { getLibrary } from "../utils/caverJsReact";
import Layout from "../components/Layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CaverJsReactProvider getLibrary={getLibrary}>
        <Layout>
          <Head>
            <title>BerrySwap</title>
            <meta name="description" content="Trade your berries here" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </CaverJsReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
