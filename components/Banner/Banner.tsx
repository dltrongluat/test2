import Image from "next/image";

import ladyImage1 from "../../public/images/banner/ladyimg1.png";
import ladyImage2 from "../../public/images/banner/ladyimg2.png";
import ladyImage4 from "../../public/images/banner/ladyimg4.png";
import ladyImage5 from "../../public/images/banner/ladyimg5.png";
import ladyImage6 from "../../public/images/banner/ladyimg6.png";
import ladyImage7 from "../../public/images/banner/ladyimg7.png";
import Lady from "../../public/images/lady/Lady.svg";
import uniswapHore from "../../public/images/banner/uniswapHorse.svg";
import dextools from "../../public/images/banner/dextools.svg";
import Bybit from "../../public/images/banner/Bybit.svg";
import Bitget from "../../public/images/banner/Bitget.svg";
import Gate from "../../public/images/banner/Gate.svg";
import Huobi from "../../public/images/banner/houbi.svg";
import Mexc from "../../public/images/banner/Mexc.svg";
import OKX from "../../public/images/banner/OkX.svg";

import starIcon from "../../assets/starIcon.png";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ListIconBuy from "./ListIconBuy";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const slideImages = [
  {
    url: ladyImage1,
  },
  {
    url: ladyImage2,
  },
  {
    url: ladyImage4,
  },
  {
    url: ladyImage5,
  },
  {
    url: ladyImage6,
  },
  {
    url: ladyImage7,
  },
];
const listCEX = [
  {
    title: "OKX Dex",
    icon: OKX,
    link: "https://www.okx.com/web3/dex?inputChain=1&inputCurrency=ETH&outputChain=1&outputCurrency=0x12970e6868f88f6557b76120662c1b3e50a646bf",
  },
  {
    title: "Bybit",
    icon: Bybit,
    link: "https://www.bybit.com/en-US/trade/spot/LADYS/USDT",
  },
  {
    title: "Gate",
    icon: Gate,
    link: "https://gate.io/trade/ladys_usdt",
  },
  {
    title: "Huobi",
    icon: Huobi,
    link: "https://www.huobi.com/en-us/exchange/ladys_usdt",
  },
  {
    title: "Bitget",
    icon: Bitget,
    link: "https://www.bitget.com/en/spot/ladysusdt_SPBL?type=spot",
  },
  {
    title: "MEXC",
    icon: Mexc,
    link: "https://www.mexc.com/exchange/LADYS_USDT",
  },
];

const listCEX2 = [
  {
    title: "V2 (ERC20)",
    icon: uniswapHore,
    link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x12970E6868f88f6557B76120662c1B3E50A646bf",
  },
  {
    title: "V3 (ARB)",
    icon: uniswapHore,
    link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3b60FF35D3f7F62d636b067dD0dC0dFdAd670E4E",
  },
  {
    title: "(ERC20)",
    icon: dextools,
    link: "https://www.dextools.io/app/en/ether/pair-explorer/0xcbe856765eeec3fdc505ddebf9dc612da995e593",
  },
  {
    title: "(ARB)",
    icon: dextools,
    link: "https://www.dextools.io/app/en/arbitrum/pair-explorer/0x1371e3f8fb588a520d43e816cfbeb6e94078b5e6%5D",
  },
];
const Banner = () => {
  return (
    <div id="home" className=" overflow-hidden">
      <div className="w-full px-[16px] md:px-0 md:max-w-[1220px] pt-[52px] md:pt-[48px] bg-[#3333333] mx-auto">
        <div className="flex flex-col-reverse md:flex-col md:flex justify-center">
          <div className="w-full max-w-[382px] h-[382px] mx-auto mt-[32px] md:mt-0 md:max-w-[300px] md:h-[300px] drop-shadow-[4px_4px_0px_#121212] rounded-lg overflow-hidden">
            <div className="slide-container">
              <Slide arrows={false} duration={2000}>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      style={{
                        ...divStyle,
                      }}
                    >
                      <div className="hidden md:block mx-auto md:max-w-[324px] rounded-lg overflow-hidden">
                        <Image
                          width={324}
                          height={324}
                          src={slideImage.url}
                          alt="lady"
                          objectFit="cover"
                        />
                      </div>
                      <div className="w-full mx-auto md:hidden rounded-lg overflow-hidden">
                        <Image
                          width={382}
                          height={382}
                          src={slideImage.url}
                          alt="lady"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
          <div>
            <div className="w-full text-center md:max-w-[800px] md:mt-[48px] mx-auto">
              <div className="font-normal text-[75px] leading-[105px] flex justify-center lg:justify-between items-end w-[245px] h-[60px] mx-auto">
                <div className="w-[80px] h-[80px] mr-[16px]">
                  <Image src={Lady} alt="logo" width={80} height={80} />
                </div>
                <div className="font-bold text-[48px] leading-[60px] text-[#262626] font-font_primary m-0 p-0">
                  Milady
                </div>
              </div>
              <div className="font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] mt-[24px] text-[#1F1310] font-text px-[12px] md:px-0 font-style italic">
                <div>Miladys knew this coin would come.</div>
                <div className="mt-[12px]">
                  LADYS may not be the meme coin Miladys want, but LADYS is the
                  meme coin Miladys need in these times of unbridled memetic
                  power.
                </div>
                <div className="mt-[12px]">
                  You like the art, we make the coin.
                </div>
              </div>
            </div>
            <ListIconBuy />

            <div className="flex flex-wrap justify-between md:justify-evenly mt-[32px] md:mt-[40px] md:mx-auto">
              {listCEX.map((item, index) => {
                return (
                  <a
                    target="_blank"
                    href={item.link}
                    className="w-[48%] bg-[#fff] h-[52px] md:mr-0 md:max-w-[210px] md:h-[56px] mb-[16px] last:mb-0 text-[#364C18] italic text-[20px] border-solid border-[1px] border-[#364C18] shadow-[2px_2px_0_#58362C] justify-center flex items-center cursor-pointer font-normal leading-7"
                  >
                    <div className="w-[32px] h-[32px] mr-[10px]">
                      <Image
                        src={item.icon}
                        alt="token logo"
                        objectFit="cover"
                        height={32}
                        width={32}
                      />
                    </div>
                    <span> {item.title}</span>
                  </a>
                );
              })}
              {listCEX2.map((item, index) => {
                return (
                  <a
                    target="_blank"
                    href={item.link}
                    className="w-[48%] bg-[#fff] h-[52px] md:mr-0 md:max-w-[210px] md:h-[56px] mb-[16px] last:mb-0 text-[#364C18] italic text-[20px] border-solid border-[1px] border-[#364C18] shadow-[2px_2px_0_#58362C] justify-center flex items-center cursor-pointer font-normal leading-7"
                  >
                    <div className="w-[32px] h-[32px] mr-[10px]">
                      <Image
                        src={item.icon}
                        alt="token logo"
                        objectFit="cover"
                        height={32}
                        width={32}
                      />
                    </div>
                    <span> {item.title}</span>
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-between md:justify-evenly mt-[32px] md:mt-[24px] md:mx-auto"></div>
          </div>
        </div>

        <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
          <Image src={starIcon} alt="star icon" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
