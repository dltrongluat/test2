

import { useMemo } from 'react'
import { useContract, useContractWrite, usePrepareContractWrite, useProvider, useSigner, useWaitForTransaction } from 'wagmi'
import { getParsedEthersError } from "@enzoferey/ethers-error-parser";

import ABI_AIDROP from '@/app/_contract/aidrop.json'
import { ethers } from 'ethers'

export function useClaim(signature) {

    const { data: signer } = useSigner()

    const  claim  = async (token) => {

        if(!signature){
            alert("Not found signature!")
        }

        const { r, s, v } = ethers.utils.splitSignature(signature)
        const Proof = {
          v,
          r,
          s
        }
        const contractClaim = new ethers.Contract(token, ABI_AIDROP, signer);

        let resTx = await contractClaim.claim(Proof)
    
        console.log(
            `approveMint, see transaction: https://testnet.bscscan.com/tx/${resTx.hash}`
        )
  
        return await resTx.wait()
    
    }

    const  checkUserClaim  = async (  token:string, address:string) => {

        if(!address || !token){
            return
        }
  
        const contractClaim = new ethers.Contract(token, ABI_AIDROP, signer);

        return  await contractClaim.userClaimed(address)
    
    }

    return {
        checkUserClaim,
        claim
    }
}

export default useClaim;
