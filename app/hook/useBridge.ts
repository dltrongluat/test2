import { useAccount, useSigner } from 'wagmi'
import ABI_BRIDGE from '@/app/_contract/Bridge.json'
import ABI_ERC20_LADYS from '@/app/_contract/ILadysToken.json'

import { ethers } from 'ethers'

export function useBridge(chainId: number | any) {

    const { data: signer } = useSigner({
        chainId: chainId
    })

    const {address} = useAccount()

    const  bridge = async ({ ladysToken, addressBridge, toChainID , amount}) => {

        // console.log("******bridge ladysToken",ladysToken);
        // console.log("ABI_BRIDGE",ABI_BRIDGE);
        //console.log("addressBridge",addressBridge);
        //console.log("toChainID",toChainID);
        //console.log("amount",amount);
    
        const ammountEther = ethers.utils.parseEther(amount.toString())

        // const accountBalance  = await balanceToToken(ladysToken)

        let accountApprove = await allowanceLADYS(ladysToken,addressBridge);
        if(accountApprove){
            accountApprove = ethers.utils.formatEther(accountApprove);
           
        }
      
        // console.log("accountApprove",accountApprove);
        // console.log("amount",amount);
        if(!accountApprove || (Number(accountApprove) < Number(amount))){
            await approvedBride(ladysToken,addressBridge, ammountEther);
        }
        
        const contractBridge = new ethers.Contract(addressBridge, ABI_BRIDGE, signer);
        let resTx = await contractBridge.bridge(
            ammountEther,
            toChainID.toString()
        )
    
        console.log(
            `approveMint, see transaction: https://testnet.bscscan.com/tx/${resTx.hash}`
        )
  
        return await resTx.wait()
    
    }

    const balanceToToken  = async (ladysToken) => {

        if(!ladysToken){
            return
        }

        const contractClaim = new ethers.Contract(ladysToken, ABI_ERC20_LADYS, signer);
        return  await contractClaim.balanceOf(address)

    }

    const approvedBride  = async (token:string, addressBridge:string,ammountWei) => {// token address LADYS

        if(!addressBridge){
            return
        }
  
        const contractToken = new ethers.Contract(token, ABI_ERC20_LADYS, signer);
        const approveTxn =  await contractToken.approve(addressBridge,ammountWei);

        return await approveTxn.wait()

    }

    const allowanceLADYS  = async (token:string, addressBridge:string) => { // token address LADYS
  
        const contractToken = new ethers.Contract(token, ABI_ERC20_LADYS, signer);
        return  await contractToken.allowance(address, addressBridge)

    }

    return {
        address,
        approvedBride,
        bridge
    }

}

export default useBridge;
