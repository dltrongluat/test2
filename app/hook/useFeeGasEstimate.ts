import { useEffect, useMemo, useState } from "react";
import { useFeeData, usePrepareContractWrite } from 'wagmi'
import { ethers } from "ethers";
import ABI_BRIDGE from '@/app/_contract/Bridge.json'

export function useFeeGasEstimate(data) {

  const [amountGas, setAmountGas] = useState({
    baseFee: 0,
    priorityFeePer: 0,
    gasLimit: 0
  });

//declare const units: readonly ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
  const feeData = useFeeData({
    chainId: Number(data.from.chainId),
    watch: true,
    scopeKey: 'wagmi',
    cacheTime: 3_000,
    formatUnits: 'gwei',
    onSuccess(data) {
      
      console.log('--------useFeeData----success:', data)

      const priorityFeePer = Number(data.formatted.maxPriorityFeePerGas);
       console.log("priorityFeePer",priorityFeePer);

      if(data && priorityFeePer != amountGas.priorityFeePer){
        setAmountGas({
          ...amountGas,
          priorityFeePer
        })
      }

    },
  })

  const value = "1000000000000000000";

  const { config } = usePrepareContractWrite({
    address: data?.from?.address || "",
    abi: ABI_BRIDGE,
    functionName: 'bridge',
    args: [
      value,
      Number(data.to.chainId)
    ],
    chainId: Number(data.from.chainId)
  })

  useEffect(() => {
    feeData.refetch()
  }, [data.from.chainId])

  useEffect(() => {

      console.log("gas Limit", config.request?.gasLimit.toString())

      if(config.request && config.request?.gasLimit){
        const gasLimit = Number(config.request?.gasLimit);
        if(gasLimit !== amountGas.gasLimit){
          setAmountGas({
            ...amountGas,
            gasLimit
          })
        }
      }


    // ( BASE FEE + Priority fee)  * gasLimit

  }, [config])

  const totalGasEstimate = (dataGas) => {
    if(dataGas && dataGas.gasLimit){
        console.log("dataGas",dataGas);
        const sum = (dataGas.baseFee + dataGas.priorityFeePer )* dataGas.gasLimit;
        console.log("-----sum",sum);
        return sum
        //const names = ["wei","kwei","mwei","gwei","szabo","finney","ether"];
      //  return ethers.utils.formatUnits(sum.toString())
    }
    return "- -"
  }

  return useMemo(() => {
    return {
      amountGas: amountGas ? totalGasEstimate(amountGas) : "--"
    };
  }, [amountGas]);
  
}

export default useFeeGasEstimate;
