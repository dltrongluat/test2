import useAccountBalance from "@/app/hook/useAccountBalance";

const BalanceValue = ({ token, chainId, setValue, data, setData }) => {
  const { balance } = useAccountBalance(token, chainId);
  const handleHaftValue = () => {
    if (Number(balance[token])) {
      setValue(balance[token] / 2);
      setData({
        from: {
          ...data.from,
          value: balance[token] / 2,
        },
        to: {
          ...data.to,
          value: balance[token] / 2,
        },
      });
    } else {
      setValue(0);
      setData({
        from: {
          ...data.from,
          value: 0,
        },
        to: {
          ...data.to,
          value: 0,
        },
      });
    }
  };
  const handleAllValue = () => {
    if (Number(balance[token])) {
      setValue(balance[token]);
      setData({
        from: {
          ...data.from,
          value: balance[token],
        },
        to: {
          ...data.to,
          value: balance[token],
        },
      });
    } else {
      setValue(0);
      setData({
        from: {
          ...data.from,
          value: 0,
        },
        to: {
          ...data.to,
          value: 0,
        },
      });
    }
  };
  return (
    <div className="flex md:w-[98px] md:justify-between w-full justify-end text-[#8C8C8C] md:ml-[8px] mt-[3px] md:mt-0">
      <button
        className="w-[34px] h-[20px] md:w-[42px] md:h-[28px] border-[2px] border-solid border-[##8C8C8C] rounded-[6px] md:text-[14px] md:leading-[20px] text-[12px] leading-[16px]"
        onClick={() => handleHaftValue()}
      >
        50%
      </button>
      <button
        onClick={() => handleAllValue()}
        className="w-[34px] h-[20px] md:w-[42px] md:h-[28px] border-[2px] border-solid border-[##8C8C8C] rounded-[6px] ml-[10px] md:ml-0 md:text-[14px] md:leading-[20px] text-[12px] leading-[16px]"
      >
        Max
      </button>
    </div>
  );
};
export default BalanceValue;
