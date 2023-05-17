import Image from "next/image";
import bridgeIcon from "../../public/images/bridge/iconbridge.svg";
import bridgeIcon1 from "../../public/images/bridge/iconbridge1.svg";
import bridgeIcon2 from "../../public/images/bridge/iconbridge2.svg";
import React, { useState } from "react";
import SwapNFT from "./SwapNFT";
import Summary from "./Sumary";
import History from "./History";
import CaretDown from "../../public/images/bridge/history/caret-down-fill.svg";
import LoadingSpinner from "components/Loading/Loading";
import bgSummary from "../../public/images/bridge/bgNft.png";
import ArbitrumIcon from "../../public/images/bridge/ArbitrumIcon.svg";
import ETHIcon from "../../public/images/bridge/ETHIcon.svg";

const BridgePage = () => {
  const [show, setShow] = useState(false);

  const [isSuccessBridge, setIsSuccessBridge] = useState(false);

  const changeStatus = () => {
    setShow(!show);
  };

  const [data, setData] = useState({
    from: {
      chainId: process.env.NEXT_PUBLIC_LADYS_CHAINID_A,
      name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_A,
      token: process.env.NEXT_PUBLIC_LADYS_TOKEN_A,
      address: process.env.NEXT_PUBLIC_LADYS_BRIDE_A,
      value: "",
      icon: ETHIcon
    },
    to: {
      chainId: process.env.NEXT_PUBLIC_LADYS_CHAINID_B,
      name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_B,
      token: process.env.NEXT_PUBLIC_LADYS_TOKEN_B,
      address: process.env.NEXT_PUBLIC_LADYS_BRIDE_B,
      value: "",
      icon: ArbitrumIcon
    }
  });

  const clearValueInputData = () => {
    // setValue("");
    setData({
      from: {
        ...data.from,
        value: "",
      },
      to: {
        ...data.to,
        value: "",
      },
    });
  };

  return (
    <div className="w-full h-full min-h-[calc(100vh_-_60px)] bg-[url('/images/bannerbridge.png')] bg-cover py-[24px] px-[16px] md:px-0 relative flex justify-center items-center">
      <div className="inset-0 z-0 bg-[url('/images/bannerbridge1.png')] absolute bg-cover"></div>
      <div className=" w-full md:max-w-[1024px] mx-auto rounded-2xl border-[2px] border-solid border-[#2A278A] pd:mt-0 z-1 relative">
        <div className="h-[36px] w-full bg-[#CEFDBF] rounded-tl-2xl rounded-tr-2xl px-[24px] flex items-center justify-between ">
          <div className="flex">
            <div className="w-[16px] h-[16px] bg-[#FFFFFF] rounded-full mr-[12px] border-[2px] border-solid border-[#2A278A]"></div>
            <div className="w-[16px] h-[16px] bg-[#FFFFFF] rounded-full mr-[12px] border-[2px] border-solid border-[#2A278A]"></div>
            <div className="w-[16px] h-[16px] bg-[#FFFFFF] rounded-full border-[2px] border-solid border-[#2A278A]"></div>
          </div>
          <div className="flex">
            <div className="w-[19px] h-[19px] mr-[14px]">
              <Image src={bridgeIcon} alt="bright Icon" />
            </div>
            <div className="w-[19px] h-[19px] mr-[14px]">
              <Image src={bridgeIcon1} alt="bright Icon" />
            </div>
            <div className="w-[19px] h-[19px]">
              <Image src={bridgeIcon2} alt="bright Icon" />
            </div>
          </div>
        </div>
        <div className="bg-[#BFFFF5] p-[8px] md:p-[16px] md:border-[2px] md:border-solid md:border-[#2A278A]">
          <div className="bg-[#FFFFFF] md:flex border-x-[2px] border-solid border-[#2A278A] border-y-[1px]">
            <SwapNFT
              setData={setData}
              data={data}
              isSuccessBridge={isSuccessBridge}
            />
            <div className="w-full md:max-w-[448px] relative flex justify-center items-center">
               <div className="md:w-[321px] md:h-[321px] absolute z-0">
                <Image src={bgSummary} alt="bg summary" />
              </div>
              <div className="relative w-full">
              <Summary
                setIsSuccessBridge={setIsSuccessBridge}
                data={data}
                clearValueInputData={clearValueInputData}
              />
              </div>
             
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              show ? "h-[375px]" : "h-0"
            } bg-[#fff] px-[16px] lg:px-0 overflow-y-auto transition-all duration-500 ease`}
          >
            <History
              isSuccessBridge={isSuccessBridge}
              setShow={setShow}
              show={show}
            />
          </div>
        </div>
        {/* <div className="h-[36px] w-full bg-[#bffff5]"></div> */}
        <div className="h-[36px] items-center px-[16px] flex justify-end bg-[#BFFFF5] rounded-bl-2xl rounded-br-2xl md:border-solid border-[#2A278A] border-t-[2px]">
          <div
            onClick={() => {
              changeStatus();
            }}
            className={` mr-[10px] px-[8px] cursor-pointer flex items-center bg-[#fff] border-solid border-[1px] border-[#121212] shadow-[2px_2px_0_#121212]`}
          >
            <span>History</span>
            <Image
              className={`${show ? "rotate-180" : ""}`}
              src={CaretDown}
              width={12}
              height={12}
            />
          </div>

          <LoadingSpinner isSuccessBridge={isSuccessBridge} />
        </div>
      </div>
    </div>
  );
};
export default BridgePage;
