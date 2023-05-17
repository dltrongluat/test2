import { useEffect, useState } from 'react'
import { apiService } from '@/app/apiService'
import BtnClaim from './BtnClaim'
import useClaimUser from '@/app/hook/useClaimUser'

const BtnClaimWhiteList = () => {

  // const [checkWhitelist, setCheckWhitelist] = useState('')
  const [signature, setSignature] = useState(null)
  
  const {address , isClaimed} = useClaimUser(process.env.NEXT_PUBLIC_TOKEN_CLAIM)

  const date = new Date().getTime();
  const endedTime = Number(process.env.NEXT_PUBLIC_TIME_END)<=Number(date);

  const getAddressWhitelist = async (acc:string) => {
    if(acc && endedTime === false){
      try {
        const data:any = await apiService.checkAddressWhitelist(acc);
        if(data && data?.signature){
          setSignature(data.signature)
        }
      } catch (error) {
        setSignature(null)
      }
    }
  }

  const handlerClick = async () => {

    if(!address){
      alert("Please connect your wallet")
      return;
    }

    if(!signature){
      alert("Your wallet address is not in whitelist!")
      return;
    }

  }

  useEffect(() => {
    if(address){
      getAddressWhitelist(address)
    }

    if(!address){
      setSignature(null)
    }
  }, [address]);

  // console.log("signature",signature);
  // console.log("isClaimed",isClaimed);

  //   Airdrop claim period ended
  if(endedTime){
    return  (
      <button
      disabled={true}
      className="block bg-color_text opacity-50  text-[#fff] w-full py-[10px] mt-8 border-solid border-[1px] border-color_text shadow-[2px_2px_0_#1C0E0A]">
           Claim Airdrop
      </button> 
    );
  }

  if(!process.env.NEXT_PUBLIC_TOKEN_CLAIM){
    return (
      <button
        className={`opacity-50 font-font_primary font-semibold block bg-[#262626] text-[#fff] w-full py-[10px] mt-8 border-solid border-[1px] border-color_text shadow-[2px_2px_0_#1C0E0A]`}>
          Claim Airdrop
        </button> 
      )
  }

  // User not whitelist
  if(signature === null){
    return (
      <button
      onClick={()=>{handlerClick()}}
      className={`opacity-50 font-font_primary font-semibold block bg-[#262626] text-[#fff] w-full py-[10px] mt-8 border-solid border-[1px] border-color_text shadow-[2px_2px_0_#1C0E0A]`}>
        Claim Airdrop
      </button> 
    )
  }

  // user did Claimed
  if(isClaimed){
    return  (
      <button
      disabled={true}
      className="block bg-color_text text-[#fff] w-full py-[10px] mt-8 border-solid border-[1px] border-[#58362C] shadow-[2px_2px_0_#58362C]">
        Claimed
      </button> 
    );
  }

  return (
    <>

      {(signature && address) && <BtnClaim signature={signature} address={address} />} 
    
    </>
  )
}

export default BtnClaimWhiteList
