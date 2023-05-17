import Image from "next/image";

import twitter from "../../assets/icon/twitter.webp";
import telegram from "../../assets/icon/telgrrgrgrgr.webp";
import dextools from "../../assets/icon/dextools.webp";
import etherscan from "../../assets/icon/etherscan.webp";
import arbitrum from "../../assets/icon/arbitrum.svg";

import cmc from "../../assets/icon/cmc.webp";
import unis from "../../assets/icon/uniswap.webp";

import coingecko1 from "../../public/images/banner/coingecko.svg";
import Discord from "../../public/images/contact/discord.svg";
import React, { useEffect, useState } from "react";
import { useNetwork } from "wagmi";


const listIcon = [
  {
    icon: twitter,
    link: "https://twitter.com/miladymemecoin",
    link_other:"https://twitter.com/miladymemecoin",
  },
  {
    icon: telegram,
    link: "https://t.me/miladymemecoinchannel",
    link_other:"https://t.me/miladymemecoinchannel",
  },
  {
    icon: telegram,
    link: "https://t.me/miladymemecoin",
    link_other:"https://t.me/miladymemecoin",
  },
  {
    icon: Discord,
    link: "https://discord.com/invite/miladymemecoin",
    link_other:"https://discord.com/invite/miladymemecoin",
  },
  // {
  //   icon: dextools,
  //   link: "https://www.dextools.io/app/en/ether/pair-explorer/0xcbe856765eeec3fdc505ddebf9dc612da995e593",
  //   link_other: "https://www.dextools.io/app/en/arbitrum/pair-explorer/0x1371e3f8fb588a520d43e816cfbeb6e94078b5e6"
  // },
  {
    icon: etherscan,
    link: "https://etherscan.io/token/0x12970E6868f88f6557B76120662c1B3E50A646bf",
    link_other:"https://etherscan.io/token/0x12970E6868f88f6557B76120662c1B3E50A646bf",
  },
  {
    icon: arbitrum,
    link: "https://arbiscan.io/token/0x3b60ff35d3f7f62d636b067dd0dc0dfdad670e4e",
    link_other:"https://arbiscan.io/token/0x3b60ff35d3f7f62d636b067dd0dc0dfdad670e4e"
  },
  {
    icon: cmc,
    link: "https://coinmarketcap.com/currencies/milady-meme-coin/",
    link_other:"https://coinmarketcap.com/currencies/milady-meme-coin/"
  },
  // {
  //   icon: unis,
  //   link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x12970E6868f88f6557B76120662c1B3E50A646bf",
  //   link_other: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3b60FF35D3f7F62d636b067dD0dC0dFdAd670E4E"
  // },
  {
    icon: coingecko1,
    link: "https://www.coingecko.com/en/coins/milady-meme-coin",
    link_other:"https://www.coingecko.com/en/coins/milady-meme-coin"
  }
];


const ListIconBuy = () => {

  // const [isEtherscan, setIsEtherscan] = useState(true);

  // const { chain } = useNetwork();

  // useEffect(() => {
  //   if (chain && chain.id  !== 1) {
  //     setIsEtherscan(false)
  //   }
  // }, [chain]);

  return (
    <div className="flex justify-center gap-y-4 gap-x-[24px] lg:gap-y-0 flex-wrap mt-[32px]">
      {listIcon.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[40px] h-[40px] lg:mr-0 cursor-pointer"
          >
            <a target="_blank" href={item.link}>
              <Image src={item.icon} alt="icon" />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default ListIconBuy;
