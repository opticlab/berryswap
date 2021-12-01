import Caver from "caver-js";
import { BigNumber } from "ethers";
import getNodeUrl from "./getRpcUrl";

export const caver =
  typeof window != "undefined"
    ? new Caver((window as any).klaytn)
    : new Caver(getNodeUrl());

export async function getKlayBalance(address: string) {
  return BigNumber.from(await caver.rpc.klay.getBalance(address));
}
