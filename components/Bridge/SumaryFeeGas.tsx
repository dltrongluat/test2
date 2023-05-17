import useFeeGasEstimate from "@/app/hook/useFeeGasEstimate";

const SumaryFeeGas = ({ data }: any) => {

  // const { 
  //   amountGas
  // } = useFeeGasEstimate(data);

  // const sumGas = (data)=>{
  //     if(data.gasLimit){
  //         const sum = (amountGas.baseFee + amountGas.priorityFeePer )* amountGas.gasLimit;
  //         return sum /1000000000
  //     }
  // }
  //( BASE FEE + Priority fee)  * gasLimit

  return (
    <>
      {/* {amountGas} ETH */}
    </>
  );
};

export default SumaryFeeGas;
