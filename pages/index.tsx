import type { NextPage } from "next";
import CatchPhrase from "../components/CatchPhrase";
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {
  return (
    <>
      <CatchPhrase height="20vh" />
      <Dashboard height="20vh" />
    </>
  );
};

export default Home;
