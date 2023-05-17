import { useState } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";
import { getParsedEthersError } from "@enzoferey/ethers-error-parser";
import useClaimBridge from "@/app/hook/useClaimBridge";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const BtnClaimBridge = ({
  itemData,
  setActiveStep,
  activeStep,
  setShowModal,
}) => {
  const [isPending, setIsPending] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  const { open } = useWeb3Modal();
  const { chain } = useNetwork();

  const { address, claim } = useClaimBridge(Number(itemData?.to_chain_id));

  const { switchNetworkAsync } = useSwitchNetwork({
    onMutate(args) {
      // console.log('Mutate', args)
    },
    onSuccess(data) {
      // console.log('Success',  data)
    },
  });

  const notifySuccess = () => toast("Successfully!!");
  const notifyAlert = (msg: string) => toast.warn(msg);

  const switchNetworkClaimBridge = async (chainId: number) => {
    await switchNetworkAsync(chainId);
    setIsPending(true);
    await sleep(2000);
    setIsPending(false);
    return true;
  };

  const handlerBridgeClaim = async () => {
    if (isPending) {
      return;
    }

    setIsPending(true);

    try {
      if (address) {
        const resTx = await claim(itemData);

        setIsPending(false);

        notifySuccess();
        setShowModal({
          ...resTx,
          chainId: Number(itemData?.to_chain_id)
        });
        setIsClaimed(true);
        setActiveStep(4);
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

    const chainID = Number(itemData?.to_chain_id);

    if (chain && chain?.id !== chainID) {
      await switchNetworkClaimBridge(chainID);
      await sleep(1000);
    }

    await handlerBridgeClaim();
  };

  if (itemData.status === "claimed" || isClaimed) {
    return (
      <button
        disabled={true}
        className="absolute opacity-50 top-10 md:top-[40px] right-0 text-[14px] px-4 md:py-2 font-font_primary bg-white border-[1px] border-[#121212] shadow-[2px_2px_0_#121212]"
      >
        <span className="font-Roslindale_bold text-base text-[#121212]">
          Claimed
        </span>
      </button>
    );
  }

  if (itemData.status !== "claimable" && activeStep < 3) {
    return (
      <button
        disabled={true}
        className="absolute opacity-50 w-[89px] h-[28px] md:h-[auto] md:w-[auto] top-10 md:top-[40px] right-0 text-[14px] md:px-4 md:py-2 py-[4px] px-[8px] font-font_primary bg-white border-[1px] border-[#121212] shadow-[2px_2px_0_#121212]"
      >
        <span className="font-Roslindale_bold font-bold text-[14px] leading-[20px] md:text-base text-[#121212]">
          Claim Now
        </span>
      </button>
    );
  }

  return (
    <>
      <button
        onClick={(e) => {
          checkWalletAccount();
        }}
        disabled={isPending}
        className="absolute top-10 md:top-[40px] right-0 text-[14px] md:px-4 md:py-2 px-[8px] py-[4px] h-[28px] w-[89px] md:h-auto md:w-auto font-font_primary bg-[#121212] shadow-[2px_2px_0_#121212]"
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
            Claim Now
          </span>
        )}
      </button>
    </>
  );
};

export default BtnClaimBridge;
