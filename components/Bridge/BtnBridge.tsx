import { useEffect, useState } from "react";
import { useNetwork,  useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";
import {
  getParsedEthersError,
  EthersError,
} from "@enzoferey/ethers-error-parser";

import useBridge from "@/app/hook/useBridge";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const BtnBridge = ({
  data,
  setIsSuccessBridge,
  clearValueInputData,
}) => {
  const [isPending, setIsPending] = useState(false);

  const { open } = useWeb3Modal();
  const { chain } = useNetwork();

  const { address, bridge } = useBridge(
    Number(data?.from?.chainId)
  );

  const { switchNetworkAsync } = useSwitchNetwork({
    onMutate(args) {
      // console.log('Mutate', args)
    },
    onSuccess(data) {
      // console.log('Success',  data)
    },
  });

  const notifySuccess = () =>
    toast(
      "Successfully!! Please wait a moment. The transfer request is being processed."
    );
  const notifyAlert = (msg) => toast.warn(msg);

  const switchNetworkBridge = async (chainId: number) => {
    await switchNetworkAsync(chainId);
    setIsPending(true);
    await sleep(2000);
    setIsPending(false);
    return true;
  };

  const reloadHistory = async () => {
    await setIsSuccessBridge(true);
    await sleep(16000);
    await setIsSuccessBridge(false);
  }

  const handlerBridge = async () => {
    if (isPending) {
      return;
    }

    setIsPending(true);

    try {
      if (address) {
        await bridge({
          ladysToken: data?.from?.token,
          addressBridge: data?.from?.address,
          toChainID: Number(data?.to?.chainId),
          amount: data?.from?.value,
        });

        setIsPending(false);
        notifySuccess();
        clearValueInputData();
        reloadHistory()
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      setIsPending(false);

      const error = getParsedEthersError(err);

      if (error) {
        if (error.errorCode === "REJECTED_TRANSACTION") {
          notifyAlert(error.errorCode);
        } else {
          notifyAlert(error.context || error.errorCode);
        }
      }

      console.log("-------:catch", error);
    }
  };

  const checkWalletAccount = async () => {
    if (!address) {
      open();
      return;
    }

    const chainID = Number(data?.from?.chainId);

    if (chain && chain?.id !== chainID) {
      await switchNetworkBridge(chainID);
      await sleep(1000);
    }

    await handlerBridge();
  };

  return (
    <>
      <button
        onClick={(e) => {
          checkWalletAccount();
        }}
        disabled={isPending}
        className="w-full mt-[35px] bg-color_text border-solid border-[1px] border-[#121212] py-[10px] shadow-[2px_2px_0_#121212] z-1"
      >
        {isPending ? (
          <div className="max-w-[160px] mx-auto flex justify-center items-center">
            <span className="ml-4 text-white">Pending</span>
            <span className="loader"></span>
          </div>
        ) : (
          ""
        )}
        {!isPending && (
          <span className="text-[#fff] font-Roslindale_bold text-base">
            Bring LADYS to {data?.to?.name}
          </span>
        )}
      </button>

    </>
  );
};

export default BtnBridge;
