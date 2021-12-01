import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Providers from "../components/Providers";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>BerrySwap</title>
        <meta name="description" content="Trade your berries here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
