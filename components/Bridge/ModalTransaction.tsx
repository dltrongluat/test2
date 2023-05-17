import Image from "next/image";
import ladyIcon from "../../public/images/bridge/ladyIcon.png";
import successIcon from "../../public/images/bridge/successIcon.png";
import closeIcon from "../../public/images/bridge/closeIcon.svg";
import ArbitrumIcon from "../../public/images/bridge/ArbitrumIcon.svg";
import ETHIcon from "../../public/images/bridge/ETHIcon.svg";

const ModalTransaction = ({ setShowModal, showModal }) => {
  const dataBridge = [
    {
      icon: ETHIcon,
      href: process.env.NEXT_PUBLIC_LADYS_BRIDE_HREF_A,
      address: process.env.NEXT_PUBLIC_LADYS_BRIDE_A,
      name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_A,
    },
    {
      icon: ArbitrumIcon,
      href: process.env.NEXT_PUBLIC_LADYS_BRIDE_HREF_B,
      address: process.env.NEXT_PUBLIC_LADYS_BRIDE_B,
      name: process.env.NEXT_PUBLIC_LADYS_CHAIN_NAME_B,
    },
  ];

  const handleAddTokenLADYS = async (chainId) => {
    let options;
    const tokenSymbol = "LADYS";
    const tokenDecimals = 18;
    const tokenImage =
      "https://s2.coinmarketcap.com/static/img/coins/64x64/25023.png";

    if (Number(chainId) === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_A)) {
      options = {
        address: process.env.NEXT_PUBLIC_LADYS_TOKEN_A,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      };
    }

    if (Number(chainId) === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_B)) {
      options = {
        address: process.env.NEXT_PUBLIC_LADYS_TOKEN_B,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      };
    }

    if (!options) {
      return;
    }

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inset-0 fixed bg-[rgba(0,0,0,0.8)] z-[10000] flex justify-center h-full">
      {dataBridge
        .filter((item) => item.address === showModal.to)
        .map((item) => {
          return (
            <div className="bg-[#FFFFFF] w-[350px] h-[320px] md:w-[460px] md:h-[332px] rounded-2xl p-[32px] fixed top-52 text-center font-font_primary">
              <div className="w-[48px] h-[48px] mx-auto">
                <Image src={successIcon} alt="successIcon" />
              </div>
              <div className="font-bold text-[24px] leading-[28px] mt-[26px] text-[#0A203D] gap-4">
                Transaction submited
              </div>
              <div
                onClick={() => {
                  handleAddTokenLADYS(showModal?.chainId);
                }}
                className="w-[186px] h-[32px] px-[16px] py-[4px] mx-auto mt-[26px] font-bold text-[16px] leading-6 border-solid border-[1px] border-[#000000] flex items-center shadow-[2px_2px_0px_#121212] cursor-pointer"
              >
                <div className="w-[24px] h-[24px] mr-[10px]">
                  <Image src={ladyIcon} alt="lady Icon" />
                </div>
                <div>Add LADYS</div>
                <div className="w-[24px] h-[24px] ml-[10px]">
                  <Image src={item.icon} alt="token icon" />
                </div>
              </div>
              <button
                onClick={() => setShowModal(null)}
                className="w-full py-[10px] mt-[24px] bg-[#121212] text-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] shadow-[2px_2px_0px_#121212]"
              >
                Close
              </button>
              <div className="font-normal text-[#0A203D] italic font-text text-[16px] leading-6 mt-[16px]">
                <a
                  href={`${item.href}${showModal.transactionHash}`}
                  target="_blank"
                >
                  View on {item.name}
                </a>
              </div>
              <button
                onClick={() => setShowModal(null)}
                className="w-[32px] h-[32px] absolute top-[25px] right-[25px]"
              >
                <Image src={closeIcon} alt="close Icon" />
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default ModalTransaction;
