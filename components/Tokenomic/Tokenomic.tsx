import Image from "next/image";
import ChartCircle from "../../public/images/tokenomic/Chart.svg";
import ChartCircle_Mobile from "../../public/images/tokenomic/chart_mobile.svg";
import starIcon from "../../assets/starIcon.png";

import bgTop from "../../public/images/global/Newa.png";
import Leaves from "../../public/images/tokenomic/Split_Leaves.png";
import Grass from "../../public/images/tokenomic/grass.png";

const textShadow =
  "rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px";

const Tokenomic = () => {
  return (
    <div id="tokenomics" className=" relative">
      <div className="w-full xl:w-[1228px] xl:max-w-[1228px] mx-auto">
        <h1 className="text-color_text text-center text-[56px] xl:text-[64px] font-bold font-font_primary">
          TOKENOMICS
        </h1>
        <div className="mt-10 xl:mt-[60px] flex flex-col space-y-10 xl:space-y-0 xl:justify-between xl:flex-row w-full px-[17px] xl:px-0">
          <div className="w-full xl:w-1/2 font-font_primary">
            <div className="text-color_text text-center font-bold text-2xl xl:text-[32px]">
              <p>Total supply:</p>
              <p className="mt-1">888,000,888,000,888</p>
            </div>
            <div className="mt-6 py-6 px-4 lg:p-8 shadow-[4px_4px_0_#262626] border-solid border-[1px] border-border_color text-[#1F1310] font-medium text-base xl:text-2xl font-text italic bg-[#fff]">
              <p className="mb-8">
                94% of the tokens were sent to the liquidity pool (LP). LP tokens were burnt, and the contract is renounced.  
              </p>
              <p className="mb-8">
                1% of the supply were airdropped to all $PEPE and Milady NFT holders. 
              </p>
              <p>
                The remaining 5% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “miladymeme.eth”
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Image quality={100} width={500} height={500} src={ChartCircle} alt="chart" />
          </div>
          <div className="lg:hidden flex justify-center">
            <Image quality={100} width={500} height={500} src={ChartCircle_Mobile} alt="chart" />
          </div>

        </div>
      </div>
      <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
          <Image src={starIcon} alt="star icon" />
      </div>
      {/* <div className="relative w-full h-[12px] lg:h-[47px]">
        <Image layout="fill" src={bgTop} alt="bg-top" />
      </div> */}

      {/* <div className="absolute w-16 h-16 xl:w-full xl:h-full top-[30%] xl:top-0 left-0">
        <Image src={Leaves} />
      </div>
      <div className="absolute hidden xl:block bottom-0 right-0">
        <Image src={Grass} />
      </div> */}
    </div>
  );
};
export default Tokenomic;
