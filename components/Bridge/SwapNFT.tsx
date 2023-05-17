import SwapIcon from "../../public/images/bridge/swap.svg";
import swapNFT from "../../public/images/bridge/swapNFT.png";
import Image from "next/image";
import Vector from "../../public/images/bridge/down.svg";
import { useState, useRef, useEffect } from "react";
import AccountBalance from "./AccountBalance";
import BalanceValue from "./BalanceValue";
import useSwitchNetworkLocal from "@/app/hook/useSwitchNetwork";
import { useNetwork, useSwitchNetwork } from "wagmi";

const SwapNFT = ({ data, setData , isSuccessBridge }) => {

  const [showModalETH, setShowModalETH] = useState(false);
  const [showModalARB, setShowModalARB] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // clear when user submit action bridge
  useEffect(() => {
    if(value && isSuccessBridge){
      setValue("")
    }
  }, [isSuccessBridge]);

  // const switchNetworkBridge = async (chainId: number) => {
  //   await switchNetworkAsync(chainId);
  // };

  const handleSwitchChangeData = () => {
    // switchNetworkBridge(Number(data.to.chainId));
    setData({
      from: {
        ...data.to,
      },
      to: {
        ...data.from,
      },
    });
  };

  const handleChangeValue = async (price) => {
    // if (chain.id !== data.from.chainId) {
    //   switchNetworkBridge(Number(data.from.chainId));
    // }

    if (price >= 0) {
      setValue(price);
      setData({
        from: {
          ...data.from,
          value: Number(price),
        },
        to: {
          ...data.to,
          value: Number(price),
        },
      });
    } else {
      alert("Amount must not be a negative number");
    }
  };

  return (
    <div className="w-full md:max-w-[544px] p-[12px] md:p-[36px] md:pb-[39px] md:border-r-[1px] md:border-r-solid md:border-r-[#2A278A]  md:border-b-0 border-b-[1px] border-b-solid border-b-[#2A278A]">
      <div className="bg-[#C41D7F] md:max-w-[472px] px-[12px] py-[16px] md:p-[16px] shadow-[2px_2px_0px_#121212] md:shadow-[4px_4px_0px_#121212]">
        <div className="md:flex justify-between items-center">
          <button
            onClick={() => {
              setShowModalARB(!showModalARB), setShowModalETH(false);
            }}
            className="w-[200px] h-[40px] md:w-[220px] md:h-[44px] flex relative py-[9px] px-[12px] md:py-[10px] md:px-[14px] bg-[#FFFFFF] shadow-[2px_2px_0px_#121212] text-[#262626] font-bold text-[14px] leading-5 md:text-[16px] md:leading-6 border-[1px] border-solid border-[#262626] cursor-pointer font-font_primary"
          >
            <div className="mr-[3px]">From:</div>
            <div className="mr-[10px]">{data?.from?.name}</div>
            <button className="w-[24px] h-[24px]">
              <Image src={Vector} alt="vector icon" />
            </button>
            {showModalARB && (
              <button
                onClick={() => {
                  handleSwitchChangeData();
                }}
                className="absolute w-full bg-[#FFFFFF] h-[56px] flex items-center px-[16px] py-[12px] -bottom-[59px] left-0 border-[1px] border-solid border-[#262626] z-10 shadow-[2px_2px_0px_#121212]"
              >
                <div className="w-[32px] h-[32px] mr-[10px]">
                  <Image src={data.to.icon} alt="Arbitrum Icon" />
                </div>
                <div>{data.to.name}</div>
              </button>
            )}
          </button>
          <AccountBalance
            token={data?.from?.token}
            chainId={data?.from?.chainId}
          />
        </div>
        <div className="flex items-center justify-between bg-[#FFFFFF] px-[10px] py-0 md:p-[16px] h-[56px] mt-[12px] rounded-[8px]">
          <div className="h-[24px] w-[84px] md:w-[90px] pr-[8px] md:pr-[16px] border-r-[1px] border-r-solid border-[##8C8C8C] flex items-center">
            <Image src={swapNFT} alt="swap NFT" objectFit="cover" />
          </div>
          <div className="md:flex pl-[10px] md:pl-0">
            <input
              className="border-none inputBridge outline-none w-full md:w-[171px] md:ml-[16px] text-right md:text-left"
              placeholder="Enter amount"
              type="text"
              value={value}
              onChange={(e) => {
                handleChangeValue(e.target.value);
              }}
              ref={inputRef}
              min={0}
            />
            <BalanceValue
              token={data?.from?.token}
              chainId={data?.from?.chainId}
              setValue={setValue}
              data={data}
              setData={setData}
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSwitchChangeData()}
        className="w-[32px] h-[32px] my-[8px] mx-auto"
      >
        <Image src={SwapIcon} alt="swap icon" />
      </div>
      <div className="bg-[#0CA0ED] p-[16px] max-w-472px shadow-[2px_2px_0px_#121212] md:shadow-[4px_4px_0px_#121212]">
        <div className="md:flex md:justify-between items-center">
          <button
            onClick={() => {
              setShowModalETH(!showModalETH), setShowModalARB(false);
            }}
            className="w-[200px] md:w-[220px] h-[44px] flex relative py-[10px] px-[14px] bg-[#FFFFFF] shadow-[2px_2px_0px_#121212] text-[#262626] font-bold text-[16px] leading-6 border-[1px] border-solid border-[#262626] cursor-pointer font-font_primary"
          >
            <div className="mr-[3px]">To:</div>
            <div className="mr-[10px]">{data.to.name}</div>
            <button className="w-[24px] h-[24px]">
              <Image src={Vector} alt="vector icon" />
            </button>
            {showModalETH && (
              <button
                onClick={() => handleSwitchChangeData()}
                className="absolute w-full bg-[#FFFFFF] h-[56px] flex items-center px-[16px] py-[12px] -bottom-[59px] left-0 border-[1px] border-solid border-[#262626] z-10 shadow-[2px_2px_0px_#121212]"
              >
                <div className="w-[32px] h-[32px] mr-[10px]">
                  <Image src={data.from.icon} alt="Arbitrum Icon" />
                </div>
                <div className="">{data.from.name}</div>
              </button>
            )}
          </button>
          <AccountBalance token={data?.to?.token} chainId={data?.to?.chainId} />
        </div>
      </div>
    </div>
  );
};
export default SwapNFT;
