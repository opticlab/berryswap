import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BerrySwap</title>
        <meta name="description" content="Trade your berries here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </>
  );
};

export default Home;
