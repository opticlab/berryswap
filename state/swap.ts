import { BigNumber } from "ethers";
import { atom, selector } from "recoil";
import { Token } from "../utils/tokens";

export type TokenAmount = {
  token: Token;
  amount: BigNumber;
};

export type SwapState = {
  tokenA: TokenAmount | undefined;
  tokenB: TokenAmount | undefined;
};

export const swapState = atom<SwapState>({
  key: "swap",
  default: {
    tokenA: undefined,
    tokenB: undefined,
  },
});

export const swapActionState = selector({
  key: "swapAction",
  get: ({ get }) => {
    const { tokenA, tokenB } = get(swapState);

    return {
      isValid:
        tokenA &&
        tokenB &&
        tokenA.token != tokenB.token &&
        tokenA.amount.gt(0) &&
        tokenB.amount.gt(0),
    };
  },
});
