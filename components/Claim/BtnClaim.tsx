import { useEffect, useState } from 'react'
import { useAccount, useNetwork, useSigner ,useSwitchNetwork } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import useClaim from '@/app/hook/useClaim'
import { toast } from 'react-toastify'
import { getParsedEthersError } from '@enzoferey/ethers-error-parser'


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const BtnClaim = ({ signature ,address }) => {

  const date = new Date().getTime();


  const [isPending, setIsPending] = useState(false)

  const { open } = useWeb3Modal()
  const { chain } = useNetwork()

  const { data: signer } = useSigner()

  const { claim } = useClaim(signature);

  const { switchNetworkAsync } = useSwitchNetwork({
    onMutate(args) {
      // console.log('Mutate', args)
    },
    onSuccess(data) {
      // console.log('Success',  data)
    },
  })

  const notifySuccess = () => toast("Successfully!");
  const notifyAlert = (msg) => toast.warn(msg);

  const handlerClaim = async () => {
    
    if (isPending) {
      return;
    }

    setIsPending(true)

    try {

      if (signer && address ) {

        await claim(process.env.NEXT_PUBLIC_TOKEN_CLAIM)
        setIsPending(false)
        notifySuccess()

      } else {
        console.log('Ethereum object does not exist')
      }

    } catch (err) {

      setIsPending(false)
      const error =  getParsedEthersError(err)
      if(error.errorCode){
        notifyAlert(error.errorCode)
      }

      console.log("-------:catch",error);

    }
  }

  const checkWalletAccount = async () => {

    if (!address) {
      open()
      return;
    }

    const chainID = Number(process.env.NEXT_PUBLIC_CHAINID_CLAIM)

    if(chain && chain?.id !== chainID){
      await switchNetworkAsync(chainID)
      setIsPending(true)
      await sleep(2500);
      setIsPending(false)
      await sleep(500);
      await handlerClaim()
      return;
    }

    await handlerClaim()

  }


  return (
    <>

    <button

        onClick={(e) => {
            checkWalletAccount()
        }}
      
        disabled={isPending}
        className={`bg-color_text block font-font_primary font-semibold w-full py-[10px] mt-8 border-solid border-[1px] border-[#fff] shadow-[2px_2px_0_#1C0E0A]`}>
          {isPending ? <div className='max-w-[160px] mx-auto flex justify-center items-center'><span className='ml-4 text-white'>Pending</span><span className="loader"></span></div> : ''}
          {!isPending && <span className="text-[#fff] font-Roslindale_bold text-base">{"Claim Airdrop"}</span>}
      </button>

      

    </>
  )
}

export default BtnClaim
