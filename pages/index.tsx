import type { NextPage } from "next";
import Head from "next/head";

import Tokenomic from "../components/Tokenomic/Tokenomic";
import Roadmap from "../components/Roadmap/roadmap";
import Footer from "../components/Footer/footer";
import Contact from "../components/Contact/Contact";
import Banner from "../components/Banner/Banner";
import AboutPage from "../components/AboutPage/AboutPage";
import ManualPage from "../components/ManualPage/ManualPage";
import Navbar from "../components/Navbar";
import Claim from "components/Claim/Claim";
import Background from "../public/images/background.png";

const Home: NextPage = () => {
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
      <div className="contain-bg fixed w-full overflow-y-auto h-full bg-[url('../public/images/background.png')] bg-no-repeat bg-cover bg-bottom">
        <Navbar />
        <div className="absolute w-full h-[calc(100%-60px)] overflow-y-auto">
          <Banner />
          <AboutPage />
          <Claim />
          <ManualPage />
          <Tokenomic />
          <Roadmap />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
