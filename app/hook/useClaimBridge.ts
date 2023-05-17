

import { useMemo, useState } from 'react'
import { useAccount, useSigner } from 'wagmi'

import ABI_BRIDGE from '@/app/_contract/Bridge.json'
import { ethers } from 'ethers'

export function useClaimBridge(chainId: number | any) {

    const { data: signer } = useSigner({
        chainId: chainId
    })

    const {address} = useAccount()

    const [isLoading, setIsLoading] = useState(false)

    const  claim  = async (item:any) => {

        //setIsLoading(true)

        let addressBridge;
        if(item.to_chain_id === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_A)){
            addressBridge = process.env.NEXT_PUBLIC_LADYS_BRIDE_A
        }

        if(item.to_chain_id === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_B)){
            addressBridge = process.env.NEXT_PUBLIC_LADYS_BRIDE_B
        }

        if(!addressBridge){
            alert("Please check address bridge!")
            return;
        }

        let listProof = [];

        if(item.signatures){

            for (const key of item.signatures) {

                const { r, s, v } = ethers.utils.splitSignature(key)
                const Proof = {
                  v,
                  r,
                  s
                }
                listProof.push(Proof)
                // if(listProof.length <= 2){
                //     listProof.push(Proof)
                // }
                
            }
        }

        const contractClaim = new ethers.Contract(addressBridge, ABI_BRIDGE, signer);

      //  const ammountEther = ethers.utils.formatEther(item.amount.toString())

        console.log("_fromChainID",item.from_chain_id);
        console.log("_txHash",item.tx_hash);
        console.log("ammountEther",item.raw_amount);
        console.log("listProof",listProof);

        let resTx = await contractClaim.claim(
            item.from_chain_id,
            item.tx_hash,
            item.raw_amount,
            listProof
        )
    
        console.log(
            `approveMint, see transaction: https://testnet.bscscan.com/tx/${resTx.hash}`
        )

       // setIsLoading(false)
        return await resTx.wait();

    }

    return {
        address,
        isLoading,
        claim
    }

}

export default useClaimBridge;
