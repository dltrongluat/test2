import { useMemo, useState } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";

export function useSwitchNetworkLocal(id:number) {

  const [chainId, setchainId] = useState(id || Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_A));

  const { chains, error, isLoading, pendingChainId, switchNetworkAsync } = useSwitchNetwork()

  const switchNetworkLocal = async (chainId: number) => {

  };

  return useMemo(() => {
    return {
        chainId,
        switchNetworkLocal
    };
  }, [chainId]);
}

export default useSwitchNetworkLocal;
