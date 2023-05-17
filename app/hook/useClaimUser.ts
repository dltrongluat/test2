

import { useMemo, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'

import ABI_AIDROP from '@/app/_contract/aidrop.json'

export function useClaimUser(token) {

    const [isClaimed, setIsClaimed] = useState(false)

    const {address} = useAccount()

    const contractRead = useContractRead({
        address: token,
        abi: ABI_AIDROP,
        functionName: 'userClaimed',
        args:[address],
        watch: true,
        onSuccess(data) {
            // console.log('------Success', data)
            if(data){
                setIsClaimed(true)
            }
        },
    })
    
    return useMemo(
        () => {
           return {
            isClaimed,
            address
           }
        } ,
        [isClaimed,address]
    )
}

export default useClaimUser;
