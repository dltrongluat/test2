export const addressWalletCompact = (address:string) => {
    return `${address.slice(0, 6)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
};


export function fixedBalanceEtherZero(valueStr) {
  const stringArr = valueStr.toString().split(".");
  if (stringArr[1] === "0") {
    return stringArr[0];
  }
  return valueStr;
}

export function numberWithCommas(num) {
  if(num){
    num = num.toLocaleString("en-IN", { maximumSignificantDigits: 10 });
    let x = num.toString().split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x.join(".");
  }
}

export function truncate(str, maxDecimalDigits) {

  if( /^\d+\.?\d*$/.test(str) === false){
    return str;
  }

  if (str.includes(".")) {
    const parts = str.split(".");
    return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
  }

  return str;
  
}

export function nFormatter(num, digits = 2) {

 
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }

  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
