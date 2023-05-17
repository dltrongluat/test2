import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import BridgePage from "components/Bridge/BridgePage";

const Bridge = () => {
  return (
    <>
      <Head>
        <title>The most adorable anime coin in existence!</title>
        <meta
          name="description"
          content="The dogs have had their day, even the frogs had their day. It's time for otakus to unite and let Milady reign."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BridgePage />
    </>
  );
};

export default Bridge;
