import { nFormatter } from "@/app/hook/lib";
import useAccountBalance from "@/app/hook/useAccountBalance";

const AccountBalance = ({ token, chainId }) => {
  const { balance } = useAccountBalance(token, chainId);
  return (
    <div className="flex md:block font-normal text-[16px] leading-6 text-[#FFFFFF] font-font_primary mt-[10px] md:mt-0">
      <div className="mr-[8px] md:text-right font-text italic">Balance: </div>
      <div className="uppercase flex item-center">
        <div className="mr-[5px]">
          {balance && balance[token] > 0 ? nFormatter(balance[token], 2) : "0"}
        </div>
        LADYS
      </div>
    </div>
  );
};
export default AccountBalance;
