import BtnConnectNetwork from "./BtnConnectNetwork";
import SumaryFeeGas from "./SumaryFeeGas";

const Summary = ({
  data,
  setIsSuccessBridge,
  clearValueInputData,
}: any) => {
  const ContentOpZero = () => {
    return (
      <div className="content">
        <div className="pt-[8px] md:py-[32px] md:border-b-[1px] md:border-solid md:border-[#d9d9d9]">
          <p className="text-[16px] text-color_text font-normal">
            Bridging summary will appear here.
          </p>
          <button className="w-full mt-[150px] md:mt-[139px] bg-[#939393] border-solid border-[1px] border-[#121212] py-[10px] shadow-[2px_2px_0_#121212]">
            <span className="text-[#fff] opacity-50 font-font_primary font-bold text-[16px]">
              Bring LADYS to {data?.to?.name}
            </span>
          </button>
        </div>
      </div>
      
    );
  };

  const ContentOpOne = () => {
    return (
      <div className="content">
        <div className="pt-[8px] md:py-[32px] md:border-b-[1px] md:border-solid md:border-[#d9d9d9]">
          <p className="flex items-center justify-between">
            <span className="font-normal text-color_text text-[16px]">
              You'll pay in L2 gas fee
            </span>

            {/* <SumaryFeeGas chainId={data.from.chainId} data={data}/> */}
            {data && data?.from?.chainId && <SumaryFeeGas data={data} />}

            <span className="font-font_primary text-color_text text-[16px] font-bold">
              {/* {data?.from?.value} ETH */}
            </span>
          </p>
          <p className="mt-[24px] font-normal text-color_text text-[16px]">
            Make sure you have ETH in your L1 wallet, you’ll need it to power
            transactions.
          </p>
        </div>

        <BtnConnectNetwork
          data={data}
          setIsSuccessBridge={setIsSuccessBridge}
          clearValueInputData={clearValueInputData}
        />
      </div>
    );
  };

  const ContentOpTwo = () => {
    return (
      <div className="content">
        <div className="pt-[8px] md:py-[32px] md:border-b-[1px] md:border-solid md:border-[#d9d9d9]">
          <p className="flex items-center justify-between">
            <span className="font-normal text-color_text text-[16px]">
              You'll pay in L1 gas fee
            </span>
            <span className="font-font_primary text-color_text text-[16px] font-bold">
              {/* {data?.from?.value} ETH */}
              {data && data?.from?.chainId && <SumaryFeeGas data={data} />}
            </span>
          </p>
          <p className="mt-[24px] font-normal text-color_text text-[16px]">
            Make sure you have ETH in your L2 wallet, you’ll need it to power
            transactions.
          </p>
        </div>

        <BtnConnectNetwork
          data={data}
          setIsSuccessBridge={setIsSuccessBridge}
          clearValueInputData={clearValueInputData}
        />

      </div>
    );
  };

  const ENUMS_OP = {
    0: <ContentOpZero />,
    1: <ContentOpOne />,
    2: <ContentOpTwo />,
  };

  const renderContentFollowOp = () => {
    if (data?.from?.value === 0 || data?.from?.value === "") {
      return <>{ENUMS_OP[0]}</>;
    } else if (
      (data?.from?.chainId !== process.env.NEXT_PUBLIC_LADYS_CHAINID_B &&
        data?.from?.value !== 0) ||
      Number(data?.from?.value) !== 0
    ) {
      return <>{ENUMS_OP[2]}</>;
    } else {
      return <>{ENUMS_OP[1]}</>;
    }
  };

  return (
    <div className="p-[16px] md:py-[36px] md:px-[34px] h-[292px] md:h-[343px] z-1 w-full">
      <div className="header flex items-center justify-between">
        <h3 className="font-font_primary text-color_text font-bold text-[24px]">
          Summary
        </h3>
      </div>
      {renderContentFollowOp()}
    </div>
  );
};
export default Summary;
