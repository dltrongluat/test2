import Image from "next/image";
import ArbitrumIcon from "../../public/images/bridge/ArbitrumIcon.svg";
import ETHIcon from "../../public/images/bridge/ETHIcon.svg";

const dataBridge = [
  {
    icon: ETHIcon,
    href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x12970E6868f88f6557B76120662c1B3E50A646bf",
    address: process.env.NEXT_PUBLIC_LADYS_BRIDE_A,
    name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_A,
  },
  {
    icon: ArbitrumIcon,
    href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3b60FF35D3f7F62d636b067dD0dC0dFdAd670E4E",
    address: process.env.NEXT_PUBLIC_LADYS_BRIDE_B,
    name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_B,
  },
];

const ModalBuyNow = ({ setShowBuyNow }) => {
  return (
    <div
      onClick={() => setShowBuyNow(false)}
      className="inset-0 fixed bg-[rgba(0,0,0,0.8)] z-[10000] flex justify-center h-full"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="bg-[#FFFFFF] w-[90%] py-[32px] px-[16px] md:w-[392px] md:h-[256px] rounded-lg md:p-[32px] fixed top-52 text-center font-font_primary"
      >
        {dataBridge.map((item, index) => {
          return (
            <button
              className="w-full h-[48px] px-[16px] py-[8px] border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mb-[24px]"
              key={index}
            >
              <a
                href={item.href}
                target="_blank"
                className="flex items-center justify-center"
              >
                <div className="w-[32px] h-[32px] mr-[10px]">
                  <Image src={item.icon} alt="icon" />
                </div>
                <div className="font-bold text-[16px] leading-[24px] text-[#262626]">
                  Buy $LADYS on {item.name}
                </div>
              </a>
            </button>
          );
        })}
        <button
          onClick={() => setShowBuyNow(false)}
          className="w-full h-[44px] bg-[#121212] text-[#FFFFFF] font-bold text-[16px] leading-[24px] shadow-[2px_2px_0px_#121212] border-solid border-[1px] border-[#FFFFFF]"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default ModalBuyNow;
