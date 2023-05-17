import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import BtnBridge from "./BtnBridge";

const BtnConnectNetwork = ({
  data,
  setIsSuccessBridge,
  clearValueInputData,
}) => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const checkWalletAccount = async () => {
    if (!address) {
      open();
      return;
    }
  };

  return (
    <>
      {address ? (
        <BtnBridge
          data={data}
          setIsSuccessBridge={setIsSuccessBridge}
          clearValueInputData={clearValueInputData}
        />
      ) : (
        <button
          onClick={(e) => {
            checkWalletAccount();
          }}
          className="w-full mt-[35px] bg-color_text border-solid border-[1px] border-[#121212] py-[10px] shadow-[2px_2px_0_#121212] z-1"
        >
          <span className="text-[#fff] font-font_primary font-bold text-[16px]">
            Connect Wallet
          </span>
        </button>
      )}
    </>
  );
};

export default BtnConnectNetwork;
