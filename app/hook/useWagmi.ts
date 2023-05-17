

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { configureChains, createClient } from 'wagmi'
// import { mainnet , arbitrumGoerli , goerli} from 'wagmi/chains'

import { InjectedConnector } from 'wagmi/connectors/injected'

import { 
  mainnet , 
  arbitrum ,
  goerli,
  arbitrumGoerli,
} from 'wagmi/chains'

const chains = [
  mainnet, 
  arbitrum,
  goerli,
  arbitrumGoerli
  //bscTestnet, baseGoerli, bsc, mainnet
]

// const connectorOkx = new InjectedConnector({
//   chains,
//   options: {
//     name: 'OKX Wallet',
//     shimDisconnect: true,
//     getProvider: () =>
//       (typeof window !== 'undefined' && window.okxwallet) ? window.okxwallet : undefined,
//   },
// })

const projectId:any = process.env.NEXT_PUBLIC_PROJECT_ID

const useWagmi = () => {

  // 1. Get projectID at https://cloud.walletconnect.com
  if (!projectId) {
    return null;
  }

  const { provider } = configureChains(chains, [w3mProvider({ projectId })])

  const wagmiClient:any = createClient({
    autoConnect: true,
    connectors: [...w3mConnectors({ projectId, version: 1, chains }), 
      new InjectedConnector({
      chains,
      options: {
        name: 'OKX Wallet',
        shimDisconnect: true,
        getProvider: () =>
          (typeof window !== 'undefined' && window?.okxwallet) ? window?.okxwallet : undefined,
      },
    })],
   // connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })

  const ethereumClient:any = new EthereumClient(wagmiClient, chains)

  return {
      wagmiClient,
      ethereumClient,
      projectId
  }
    
}

export default useWagmi;
