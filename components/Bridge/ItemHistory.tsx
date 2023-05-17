import Image from "next/image";
import successActive from "../../public/images/bridge/history/successActive.svg";
import success from "../../public/images/bridge/history/succes.svg";
import { useEffect, useState } from "react";
import moment from "moment";
import { apiService } from "@/app/apiService";
import BtnClaimBridge from "./BtnClaimBridge";
import { nFormatter } from "@/app/hook/lib";

const stepsGroLiToArb = [
  {
    step: 1,
    label: "Transfer to bridge",
    isButton: false,
    isStatus: false,
  },
  {
    step: 2,
    label: "Verify L1",
    isButton: false,
    isStatus: false,
  },
  {
    step: 3,
    label: "Verify L2",
    isButton: false,
    isStatus: false,
  },
  {
    step: 4,
    label: "Claim now",
    isButton: true,
    isStatus: false,
  },
];
const stepsArbToGroLi = [
  {
    step: 1,
    label: "Transfer to bridge",
    isButton: false,
    isStatus: false,
  },
  {
    step: 2,
    label: "Verify L2",
    isButton: false,
    isStatus: false,
  },
  {
    step: 3,
    label: "Verify L1",
    isButton: false,
    isStatus: false,
  },
  {
    step: 4,
    label: "Claim now",
    isButton: true,
    isStatus: false,
  },
];

const ItemHistory = ({ data, index, getListHistoryByUser, setShowModal }) => {
  const [width, setWidth] = useState(0);
  const [flag, setFlag] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps =
    data.from_chain_id === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_A) &&
    data.to_chain_id === Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_B)
      ? stepsGroLiToArb
      : stepsArbToGroLi;

  const getTransactionsByTxHash = async () => {
    // console.log("getTransactionsByTxHash",data.tx_hash);

    let counter = 0;
    let successTask: any = null;

    const checkInterval = setInterval(() => {
      const checkTask = async () => {
        try {
          const response = await apiService.getTransactionByTx_Hash(
            data.tx_hash
          );
          if (response.data && response.data.status !== "in_process") {
            successTask = response.data;
            showViewProcess(response.data);
            setFlag(true);
            getListHistoryByUser();
          }
        } catch (err) {
          console.log(err);
        }
      };

      if (!successTask) {
        checkTask();
      }

      counter++;
      if (counter === 30) {
        setFlag(true);
        clearInterval(checkInterval);
      }
    }, 20000);
  };

  const showViewProcess = (item) => {
    if (item.tx_hash && item.status === "in_process") {
      // setWidth(50)
      setActiveStep(2);
    } else if (item.status === "claimable") {
      // setWidth(75)
      setActiveStep(3);
    } else if (item.status === "claimed") {
      // setWidth(100)
      setActiveStep(4);
    }
  };

  const widthFollowStep = (numberStep) => {
    switch (numberStep) {
      case 0: {
        return "0%";
      }
      case 2: {
        return "50%";
      }
      case 3: {
        return "75%";
      }
      case 4: {
        return "100%";
      }
    }
  };

  useEffect(() => {
    if (data) {
      showViewProcess(data);
    }
  }, [data.tx_hash]);

  useEffect(() => {
    if (data.tx_hash && data.status === "in_process" && flag === false) {
      getTransactionsByTxHash();
      setFlag(true);
    }
  }, [data.tx_hash]);

  return (
    <div className="border-b-[1px] pb-9 lg:pb-[26px] lg:pt-[38px] lg:pb-[60px] border-solid border-[#BFBFBF] flex items-center justify-between overflow-hidden">
      <div className="progress py-[38px] w-[730px] flex lg:items-center flex-col lg:flex-row lg:justify-between ">
        <p className="w-full flex item-center justify-between lg:hidden">
          <span>{index + 1}</span>
          {/* <span className="text-[#8C8C8C] text-[12px] font-normal italic">Time: 2023.05.08 09:00</span> */}
          <span className="text-[#8C8C8C] text-[12px] font-normal italic">
            Time: {moment.unix(data.created_time).format("YYYY/MM/DD hh:mm a")}
          </span>
        </p>
        <span className="hidden lg:block">{index + 1}</span>
        <div className="verify mt-4 lg:mt-0 relative flex justify-between items-center w-full lg:w-[685px] lg:ml-8 ">
          {steps.map((step, stepIndex) => {
            return (
              <div className="z-10 relative w-[30%] item">
                <div
                  className={`w-[20] h-[20] absolute right-0 top-[-8px] ${
                    stepIndex === 0 ? "left-0" : ""
                  }`}
                >
                  <Image
                    src={step.step <= activeStep ? successActive : success}
                  />
                </div>
                {!step.isButton ? (
                  <p
                    className={`${
                      stepIndex === 0 ? "left-0" : ""
                    } absolute top-[16px] right-0 text-[12px] lg:text-[14px] font-normal text-color_text`}
                  >
                    {step.label}
                  </p>
                ) : (
                  <>
                    <span className="text-[14px] text-color_text w-[150px] md:w-[250px] absolute left-4 md:left-[80px] top-[14px]">
                      Claim: {nFormatter(data.amount)} LADYS
                    </span>
                    <BtnClaimBridge
                      itemData={data}
                      setActiveStep={setActiveStep}
                      activeStep={activeStep}
                      setShowModal={setShowModal}
                    />
                  </>
                )}
              </div>
            );
          })}
          <div
            className={`absolute w-[100%] top-[40%] left-0 bg-[#D9D9D9] h-[4px]`}
          ></div>
          <div
            style={{ width: widthFollowStep(activeStep) }}
            className={`absolute w-[${width}%] top-[40%] left-0 bg-[#EB2F96] h-[4px]`}
          ></div>
        </div>
      </div>
      <span className="text-[#8C8C8C] text-[12px] font-normal italic hidden lg:block">
        Time: {moment.unix(data.created_time).format("YYYY/MM/DD hh:mm a")}
      </span>
    </div>
  );
};
export default ItemHistory;
