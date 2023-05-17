import Image from "next/image";
import BtnClaimWhiteList from "./BtnClaimWhiteList";
import ComingSoon from "../../public/images/claim/Comingsoon.png"
import ReceivedTotal from "./ReceivedTotal";
import ClientOnly from "./clientOnly";
import starIcon from "../../assets/starIcon.png";
import Sub from "../../public/images/claim/Subtract.svg"
import Square from "../../public/images/claim/Square.svg"
import Multi from "../../public/images/claim/Multi.svg"
const Claim = () => {
  const date = new Date().getTime();
  const endedTime = Number(process.env.NEXT_PUBLIC_TIME_END)<=Number(date);

  return (
    <div className="px-[17px] lg:px-0 md:mt-0">
      <div className="w-full lg:w-[800px] relative lg:mx-auto bg-[#fff] border-solid border-2 border-[#262626] rounded-tl-2xl rounded-tr-2xl shadow-[4px_4px_0_#121212]">
        <div className=" bg-[#ED9D70] py-[10px] px-6 flex justify-between items-center rounded-tl-2xl rounded-tr-2xl border-b-2 border-solid border-[#262626]">
          <div className="flex space-x-3">
            <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
            <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
            <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
          </div>
          <div className="flex space-x-3">
            <div className="w-[19px] h-[19px]">
              <Image src={Sub} alt="icon" width={19} height={19} />
            </div>
            <div className="w-[19px] h-[19px]">
              <Image src={Square} alt="icon" width={19} height={19} />
            </div>
            <div className="w-[19px] h-[19px]">
              <Image src={Multi} alt="icon" width={19} height={19} />
            </div>
          </div>
        </div>
        <div className="py-12 px-8">
          <h2 className="text-3xl lg:text-[40px] text-color_text text-center font-bold font-font_primary">
            
            {endedTime ? "Airdrop claim period ended!" : "You can claim $LADYS now!"}
          </h2>
          <p className="mt-8 mb-6 text-color_text font-text italic text-[16px] font-normal text-center">
            A total of 8,880,008,880,008.88 (1% total supply) $LADYS tokens are
            now available to be claimed by holders of Milady NFT and $PEPE token.
          </p>
          <p className="mt-6 mb-8 text-color_text w-full lg:w-[75%] mx-auto font-text italic text-[16px] font-normal text-center">
            $LADYS tokens that have not been claimed within 7 days will be burned.
            2023.05.08 09:00 (UTC+0) - 2023.05.15 09:00 (UTC+0)
          </p>

          <ClientOnly>
            <ReceivedTotal />
          </ClientOnly>


          <ClientOnly>
            <BtnClaimWhiteList />
          </ClientOnly>

        </div>

        {!process.env.NEXT_PUBLIC_TOKEN_CLAIM &&
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(31,19,16,0.8)] flex items-center justify-center">
            <Image src={ComingSoon} alt="Coming soon" />
          </div>}
      </div>
      <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
          <Image src={starIcon} alt="star icon" />
      </div>
    </div>
  );
};
export default Claim;
