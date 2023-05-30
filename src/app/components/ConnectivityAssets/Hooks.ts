import React from "react";
// import { Contract } from "@ethersproject/contracts";
import PreSaleTokenAbi from "./PreSaleTokenAbi.json";
import TokenAbi from './TokenAbi.json';
import { token, preSaleTokenAddress } from "./Enviorment";
import { ethers } from "ethers";
let walletAddress = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
export const voidAccount = new ethers.VoidSigner(walletAddress, provider);
function useContract(address : string, ABI : any , signer: any) {
  return React.useMemo(() => {
    if (signer) {
      return new ethers.Contract(address, ABI, signer);
    } else {
      return new ethers.Contract(address, ABI, voidAccount);
    }
  }, [address, ABI, signer]);
}
export function usePresaleContract(signer: any) {
  return useContract(preSaleTokenAddress, PreSaleTokenAbi, signer);
}


  export function useToken(signer: any) {
    return useContract(token, TokenAbi, signer);
  }