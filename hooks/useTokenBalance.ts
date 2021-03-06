import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { Token } from "../utils/tokens";
import { useActiveCaverReact } from "./useActiveCaverJsReact";
import { useTokenContract } from "./useContract";

export function useTokenBalance(token: Token) {
  const { account } = useActiveCaverReact();
  const [balance, setBalance] = useState<BigNumber | undefined>();

  const tokenContract = useTokenContract(token.address);

  useEffect(() => {
    async function fetchBalance() {
      if (tokenContract && account) {
        setBalance(await tokenContract.balanceOf(account));
      }
    }

    fetchBalance();
  }, [tokenContract, account]);

  return balance;
}
