

import { useMemo, useState } from 'react'
import {  useContractRead, useToken } from 'wagmi'
import { ethers } from 'ethers'

import ABI_AIDROP from '@/app/_contract/aidrop.json'

export function useClaimAidrop(token,totalSupply) {

    const [amountClaim, setAmountClaim] = useState(0)
    
    const contractRead = useContractRead({
        address: token,
        abi: ABI_AIDROP,
        functionName: 'balance',
        watch: true,
        onSuccess(data) {
            if(data){
                const balance = ethers.utils.formatUnits(data.toString(), 18)
                // console.log("balance: " + balance);
                if(Number(balance) === 0){
                    setAmountClaim(0);
                }else{
                    const totalClaimed = Number(totalSupply) - Number(balance);
                    setAmountClaim(totalClaimed);
                }
             
            }
        },
    })

    return useMemo(
        () => {
           return {
            amountClaim
           }
        } ,
        [amountClaim,contractRead]
    )
}

export default useClaimAidrop;
