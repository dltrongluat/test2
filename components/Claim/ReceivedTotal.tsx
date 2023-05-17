import useClaimAidrop from "@/app/hook/useClaimAidrop";
import { useEffect, useState } from "react";

const ReceivedTotal = () => {

  const totalSupply = 8880008880008.88;

  const [percent , setPercent] = useState("100%"); 
  const [totalClaimed , setTotalClaimed] = useState('0'); 
  
  const { amountClaim } = useClaimAidrop(process.env.NEXT_PUBLIC_TOKEN_CLAIM,totalSupply);

  const getPercent = (amountClaim:any|number) => {
    return `100%`
    let numberPercent = 0;
    if(amountClaim === 0){
      return `0%`
    }else if(amountClaim === totalSupply){
        return `100%`
    }else if(amountClaim){
        numberPercent =  (amountClaim/totalSupply);
    } else{
        return `0%`
    } 

    if(amountClaim <= 252695408280){
      return `29%`
    }

    return Number(numberPercent).toLocaleString(
      undefined,{
      style: 'percent',
      maximumSignificantDigits: 2
    })

  }

  // useEffect(() => {
  //   if(amountClaim){
  //      setPercent(getPercent(Number(amountClaim))) 
  //   }
  // }, [amountClaim]);


  
  useEffect(() => {
    if(amountClaim){
      const formattedAmount = amountClaim.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      setTotalClaimed(formattedAmount)
    }
  }, [amountClaim]);

  return (
    <div className="mt-8">
      <p className="flex items-center justify-between text-base font-medium font-text text-[#1F1310]">
        <span>Received</span>
        <span>8,880,008,880,008.88</span>
      </p>
      <div className="w-full h-[14px] rounded-[10px] bg-[rgba(38,38,38,0.16)] group">
        <div 
          style={{ width: `${percent}` }}
          className="relative bg-color_text h-full rounded-[10px] transition-all delay-500 duration-1000"
          >
              {/* <div className="absolute top-[-1px] right-[-10px] w-[16px] h-[16px] p-[4px] bg-color_text rounded-full">
              </div> */}

              {/* {totalClaimed && <div className="absolute top-[-26px] -right-[100px] lg:right-[-40px] hidden group-hover:flex items-center justify-center px-2 h-[23px] bg-color_text rounded-[4px] text-[12px] font-semibold text-[#FFFFFF]">
                  {totalClaimed}
              </div>} */}
              
          </div>
      </div>
    </div>
  );

};
export default ReceivedTotal;
