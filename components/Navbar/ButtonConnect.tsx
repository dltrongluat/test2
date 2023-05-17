import { addressWalletCompact } from "@/app/hook/lib";
import { useWeb3Modal } from "@web3modal/react";
import ModalWallet from "components/ModalWallet";

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const ButtonConnect = () => {

  const [isOpenWallet, setIsOpenWallet] = useState(false);

  const { connect, connectors } = useConnect()

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  async function onOpenOkx() {
    
    if (typeof window.okxwallet === 'undefined') {
      if ("ontouchstart" in document.documentElement){
        window.open("https://www.okx.com/download?channelId=ACEAP6502255","_blank")
        // content for touch-screen (mobile) devices
      }else{
        window.open("https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge","_blank")
      }
      return;
    }
      
    try {

        const connector = connectors[0]

        connect({connector})

        //okxwallet.request({ method: "eth_requestAccounts" });
        // const chainId = "cosmoshub-4";
        // // Enabling before using the Keplr is recommended.
        // // This method will ask the user whether to allow access if they haven't visited this website.
        // // Also, it will request that the user unlock the wallet if the wallet is locked.
        // const keplr = window.okxwallet.keplr;
        // await keplr.enable(chainId);
        // setIsOpenWallet(true)
        // const accountName = keplr.selectedAccount.name;

      } catch (error) {
        console.log(error);
      }
    } 

 

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  useEffect(() => {
    if(isOpenWallet){
      setIsOpenWallet(false)
    }
  }, [address])

  return (
    <>
      {isConnected ? (
        <button
          onClick={onClick}
          type="button"
          className="block font-font_primary lg:w-[120px] h-8 lg:h-[40px] px-4 lg:px-0 text-[#000] bg-[#fff] font-bold  text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]"
        >
          {addressWalletCompact(address)}
        </button>
      ) : (
        <button
          // onClick={onClick}
          onClick={()=>{setIsOpenWallet(true)}}
          disabled={loading}
          type="button"
          className="font-font_primary block px-4 h-8 lg:h-[40px] text-[#FFF] bg-[#000] font-bold text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]"
        >
          Connect Wallet
        </button>
      )}

      <ModalWallet setIsOpenWallet={setIsOpenWallet} isOpenWallet={isOpenWallet} onOpen={onOpen} onOpenOkx={onOpenOkx} />
     
    </>
  );
};
export default ButtonConnect;
