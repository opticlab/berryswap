import { BigNumber } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { getKlayBalance } from "../utils/caver";
import { useActiveCaverReact } from "./useActiveCaverJsReact";

export function useKlayBalance() {
  const { account } = useActiveCaverReact();
  const [balance, setBalance] = useState(BigNumber.from(0));
  useEffect(() => {
    if (account) {
      const fetchBalance = async () => {
        setBalance(await getKlayBalance(account));
      };

      fetchBalance();
    }
  }, [account]);

  return balance;
}
