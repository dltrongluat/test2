import Image from "next/image";
// import wallet from "../../assets/wallet.webp";
// import eth from "../../assets/eth.webp";
// import switchtoken from "../../assets/switchtoken.webp";
// import unisLogo from "../../assets/unisLogo.webp";
import assetToken from "../../assets/Asset.png";
import ETH from "../../public/images/manual/ETH.png";
import Uniswap from "../../public/images/manual/uniswap.png";
import Switch from "../../public/images/manual/switch.png";
import leave6 from "../../assets/leave6.png";
import leave7 from "../../assets/leave7.png";
import nftLady from "../../assets/swapBanner.png";
// import swapunix from "../../assets/Uniswap.png";
import swapunix from "../../public/images/manual/UniswapBg.png"
import swapunixMB from "../../assets/uniswapMB.png";
import img32px from "../../assets/32px.png";
import img200px from "../../assets/200px.png";
import hrPaging from "../../assets/images/hrbannermin.png";
import avatarSwap from "../../assets/avatarSwap.png";
import caution from "../../assets/caution.svg";
import directionalIcon from "../../assets/directionalIcon.svg";
import coppyIcon from "../../assets/coppyIcon.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import starIcon from "../../assets/starIcon.png";

const data = [
  {
    icon: assetToken,
    title: "Create a Wallet",
    content:
      "Download Metamask or your wallet of choice from the app store or google play store for free. For desktop users, download the google chrome extension by going to metamask.io.",
  },
  {
    icon: ETH,
    title: "Get Some ETH",
    content:
      "Have ETH in your wallet to switch to $LADYS. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
  },
  {
    icon: Uniswap,
    title: "Go to Uniswap",
    content:
      "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $LADYS token address into Uniswap, select Milady, and confirm. When Metamask prompts you for a wallet signature, sign.",
  },
  {
    icon: Switch,
    title: "Switch ETH for $LADYS",
    content:
      "Switch ETH for $LADYS. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
  },
];
const ManualPage = () => {
  const notify = () => toast("Copy Successfully");
  const [text, setText] = useState(
    "https://etherscan.io/token/0x12970E6868f88f6557B76120662c1B3E50A646bf"
  );
  const [text1, setText1] = useState(
    "https://arbiscan.io/token/0x3b60ff35d3f7f62d636b067dd0dc0dfdad670e4e"
  );
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    notify();
  };
  const copy1 = async () => {
    await navigator.clipboard.writeText(text1);
    notify();
  };
  return (
    <div
      id="howtobuy"
      className="w-full px-[16px] overflow-hidden md:overflow-auto"
    >
      <div className="w-full max-w-[1220px] mx-auto">
        <div>
          <div className="font-bold text-[40px] leading-[56px] md:text-[64px] md:leading-[72px] text-center text-[#262626] uppercase font-font_primary">
            how to buy
          </div>
          <div className="mt-[32px] md:mt-[50px] z-10 relative">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-auto p-[16px] border-solid border-[1px] border-[#262626] bg-[#FFFFFF] md:px-[40px] md:py-[48px] rounded-[16px] mb-[20px] block md:flex md:justify-between shadow-[4px_4px_0px_#121212]"
                >
                  <div className="flex w-full max-w-[382px] md:max-w-[214px] md:items-center md:justify-end md:mr-[30px]">
                    <Image src={item.icon} alt="logo" />
                  </div>
                  <div>
                    <div className="font-bold text-[24px] leading-[32px] mt-[24px] md:mt-0 md:text-[32px] md:leading-[36px] font-font_primary">
                      {item.title}
                    </div>
                    <div className="font-normal text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] max-w-[880px] mt-[16px] font-text italic">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-[150px] md:mt-[60px] flex flex-col lg:flex-row justify-between items-center">
            <div className="md:w-[599px] h-[422px] md:h-[521px] relative flex justify-center ">
              <div className="hidden md:block w-[599px] h-[521px]">
                <Image
                  src={swapunix}
                  alt="unix lady"
                  objectFit="cover"
                  height={521}
                />
              </div>
              <div className="md:hidden w-full h-[422px]">
                <Image
                  src={swapunixMB}
                  alt="unix lady"
                  objectFit="cover"
                  className="md:hidden"
                />
              </div>
              <div className="absolute w-[334px] h-[392px] sm:h-auto md:w-[430px] md:h-[457px] bg-[#FFFFFF] rounded-t-3xl bottom-2 pt-[32px] px-[16px] md:px-[40px] flex-col text-center italic">
                <div className="w-[50px] h-[50px] mx-auto">
                  <Image src={avatarSwap} alt="avatar" />
                </div>
                <div className="w-[82px] h-[28px] mt-[12px] mx-auto">
                  <Image src={caution} alt="caution" />
                </div>
                <div className="text-center font-normal text-[14px] leading-5 md:text-[16px] md:leading-6 text-[#262626] mt-[16px] md:mt-[20px] font-text">
                  This token isn’t traded on leading U.S. centralized exchanges.
                  Always conduct your own research before trading.
                  {/* <span className="text-[#79809D] ml-1 md:ml-0"> Learn more</span> */}
                </div>
                <div className="w-full py-[6px] px-[16px] flex item-center justify-between bg-[#FCE7F1] mt-[16px] md:mt-[20px] rounded-lg">
                  <div className="text-[#E6368C] font-normal text-[14px] leading-6">
                    https://etherscan.io/token/0x1297...
                  </div>
                  <button className="w-[16px] h-[16px]">
                    <a
                      href="https://etherscan.io/token/0x12970E6868f88f6557B76120662c1B3E50A646bf"
                      target="_blank"
                    >
                      <Image src={directionalIcon} alt="directionalIcon" />
                    </a>
                  </button>
                  <button className="w-[16px] h-[16px]" onClick={copy}>
                    <Image src={coppyIcon} alt="coppyIcon" />
                  </button>
                </div>
                <div className="w-full py-[6px] px-[16px] flex item-center justify-between bg-[#FCE7F1] mt-[8px] md:mt-[10px] rounded-lg">
                  <div className="text-[#E6368C] font-normal text-[14px] leading-6">
                  https://arbiscan.io/token/0x3b60ff...
                  </div>
                  <button className="w-[16px] h-[16px]">
                    <a
                      href="https://arbiscan.io/token/0x3b60ff35d3f7f62d636b067dd0dc0dfdad670e4e"
                      target="_blank"
                    >
                      <Image src={directionalIcon} alt="directionalIcon" />
                    </a>
                  </button>
                  <button className="w-[16px] h-[16px]" onClick={copy1}>
                    <Image src={coppyIcon} alt="coppyIcon" />
                  </button>
                </div>
                <button className="w-full h-[40px] md:h-[48px] bg-[#E6368C] mt-[16px] md:mt-[20px] text-[#FFFFFF] font-normal text-[16px] leading-6 italic rounded-lg">
                  I understand
                </button>
                <button className="font-normal text-[16px] leading-6 mt-[16px] md:mt-[21px] text-[#79809D] font-text italic">
                  Cancel
                </button>
              </div>
            </div>
            <div className="hidden md:block md:w-[521px] md:h-[521px] mt-[16px] lg:mt-0">
              <Image
                src={nftLady}
                alt="nft"
                objectFit="cover"
                width={521}
                height={521}
              />
            </div>
            <div className="md:hidden w-[382px] h-[382] md:w-[521px] md:h-[521px] mt-[16px] lg:mt-0">
              <Image src={nftLady} alt="nft" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="hidden">
          <Image src={img32px} alt="token" />
          <Image src={img200px} alt="token" />
        </div>
      </div>
      <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
        <Image src={starIcon} alt="star icon" />
      </div>
    </div>
  );
};
export default ManualPage;
