import { useMemo, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";

import ABI_ERC20 from "@/app/_contract/ILadysToken.json";

export function useAccountBalance(token, chainId) {
  const [balance, setBalance] = useState([]);
  const { address } = useAccount();

  useContractRead({
    address: token,
    abi: ABI_ERC20,
    functionName: "balanceOf",
    chainId:Number(chainId),
    args: [address],
    cacheOnBlock: true,
    watch: true,
    onSuccess(data) {
      if (data) {
        const balanceToken = ethers.utils.formatUnits(data.toString(), 18);
        if (token)
          if (balanceToken !== balance[token]) {
            balance[token] = balanceToken;
            setBalance(balance);
          }
      }
    },
  });

  return useMemo(() => {
    return {
      balance,
      address,
      token,
    };
  }, [balance, address]);
}

export default useAccountBalance;
