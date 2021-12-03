import { Contract } from "ethers";
import { useMemo } from "react";
import ERC20_ABI from "../contracts/abi/ERC20.json";
import { abi as IUniswapV2Router02ABI } from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";
import { useActiveCaverReact } from "./useActiveCaverJsReact";
import { ERC20 } from "../contracts/types/internal";
import { IUniswapV2Router02 } from "../contracts/types/uniswap";

export function useContract(address: string | undefined, abi: any) {
  const { library } = useActiveCaverReact();

  return useMemo(() => {
    if (address && library) {
      return new Contract(address, abi, library);
    }

    return null;
  }, [library, address, abi]);
}

export function useTokenContract(tokenAddress?: string) {
  return useContract(tokenAddress, ERC20_ABI) as ERC20;
}

export function useRouterContract() {
  return useContract(
    "0xe85667bCEf9dbF45daE8A799c5cA8ADf136248AB",
    IUniswapV2Router02ABI,
  ) as IUniswapV2Router02;
}
