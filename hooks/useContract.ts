import { Contract } from "ethers";
import { useMemo } from "react";
import ERC20_ABI from "../contracts/erc20.json";
import { useActiveCaverReact } from "./useActiveCaverJsReact";

export function useContract(address: string | undefined, abi: any) {
  const { library } = useActiveCaverReact();

  return useMemo(() => {
    if (address && library) {
      return new Contract(address, abi, library);
    }

    return null
  }, [library, address, abi]);
}

export function useTokenContract(tokenAddress?: string) {
  return useContract(tokenAddress, ERC20_ABI)
}
