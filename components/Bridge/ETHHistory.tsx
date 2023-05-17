import Image from "next/image";
import success from "../../public/images/bridge/history/success.svg";
import { useEffect, useState } from "react";

const steps = [
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

const check = () => {
  return steps.every((item) => item.isStatus);
};

const ETHHistory = () => {
  const [activeState, setActiveState] = useState(0);

  const updateStateStep = () => {
    setActiveState(activeState + 1);
  };
  const totalStep = steps.length;

  const width = `${(activeState / totalStep) * 100}%`;
  // console.log(width);

  return (
    <div className="border-b-[1px] pb-[26px] lg:py-[38px] border-solid border-[#BFBFBF] flex items-center justify-between">
      <div className="progress py-[38px] md:w-[730px] flex lg:items-center flex-col lg:flex-row lg:justify-between ">
        <p className="w-full flex item-center justify-between lg:hidden">
          <span>1</span>
          <span className="text-[#8C8C8C] text-[12px] font-normal italic">
            Time: 2023.05.08 09:00
          </span>
        </p>
        <span className="hidden lg:block">1</span>

        <div className="verify mt-4 lg:mt-0 relative flex justify-between items-center w-full lg:w-[685px] lg:ml-8">
          {steps.map((step, index) => {
            return (
              <div className="z-10 relative w-[30%] item">
                <div
                  className={`w-[20] h-[20] absolute right-0 top-[-8px] ${
                    index === 0 ? "left-0" : ""
                  }`}
                >
                  <Image src={success} />
                </div>
                {!step.isButton ? (
                  <p
                    className={`${
                      index == -0 ? "left-0" : ""
                    } absolute top-[16px] right-0 text-[12px] lg:text-[14px] font-normal text-color_text`}
                  >
                    {step.label}
                  </p>
                ) : (
                  <button
                    onClick={() => {
                      updateStateStep();
                    }}
                    className={`${
                      check() ? "" : "bg-[#fff] text-color_text opacity-50"
                    } absolute top-[16px] right-0 text-[14px] font-font_primary bg-[#121212] shadow-[2px_2px_0_#121212] text-[#fff]  py-[4px] px-[8px]`}
                  >
                    {step.label}
                  </button>
                )}
              </div>
            );
          })}
          <div
            className={`absolute w-[100%] top-[40%] left-0 bg-[#D9D9D9] h-[4px]`}
          ></div>
          <div
            className={`absolute w-[0] top-[40%] left-0 bg-[#EB2F96] h-[4px]`}
          ></div>
        </div>
      </div>
      <span className="text-[#8C8C8C] text-[12px] font-normal italic hidden lg:block">
        Time: 2023.05.08 09:00
      </span>
    </div>
  );
};
export default ETHHistory;
