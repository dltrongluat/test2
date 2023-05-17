import "../styles/globals.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";

import useWagmi from "../app/hook/useWagmi";
import { WagmiConfig } from "wagmi";

import { Web3Modal } from '@web3modal/react'
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {

  const [mounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => setMounted(true), []);

  const { wagmiClient, ethereumClient ,projectId } = useWagmi();

  return (
   <React.Fragment>
      <main>
        {mounted && wagmiClient && (
          <WagmiConfig client={wagmiClient}>  
            <Component {...pageProps} />

          </WagmiConfig>
        )}
      </main>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </React.Fragment>
  );
}

export default MyApp;
