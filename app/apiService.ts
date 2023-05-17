import axiosClient from "./axiosClient";
import axiosClient2 from "./axiosClientBridge";

export const CHECK_ADDRESS_WHITELIST = `/airdrop`
export const ROUTER_BRIDGE = `/api-bridge`

//https://milady.gg/api/airdrop/0x7998460D75C836C89bbeEd976f97d4bD9CDc816d

//https://lady-api.esollabs.com/v1/api/airdrop/0x183Ff214179cd2B1c06A937D663F192340edd159

export const apiService = {
  
  checkAddressWhitelist: (address:string) => {
    return axiosClient.get(`${CHECK_ADDRESS_WHITELIST}/${address}`);
  },

  getHistoryTransactions: (params: any) => {
    return axiosClient2.get(`${ROUTER_BRIDGE}/transactions`, { params })
  },

  createBridgeSignature: (bodyParams: any) => {
    return axiosClient2.post(`${ROUTER_BRIDGE}/signature`, bodyParams)
  } ,
  getTransactionByTx_Hash: (params:any)=>{
    return axiosClient2.get(`${ROUTER_BRIDGE}/transactions/${params}`)
  }
  

};