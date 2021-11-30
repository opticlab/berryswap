import { ChakraProvider } from "@chakra-ui/react";
import { CaverJsReactProvider } from "@sixnetwork/caverjs-react-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import "../styles/globals.css";
import theme from "../theme";
import { getLibrary } from "../utils/caverJsReact";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <CaverJsReactProvider getLibrary={getLibrary}>
          <Head>
            <title>BerrySwap</title>
            <meta name="description" content="Trade your berries here" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CaverJsReactProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
