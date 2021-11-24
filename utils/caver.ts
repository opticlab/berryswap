import Caver from "caver-js";
import { BigNumber } from "ethers";

export const caver =
  typeof window != "undefined"
    ? new Caver((window as any).klaytn)
    : new Caver(process.env.NEXT_PUBLIC_NODE);

export async function getKlayBalance(address: string) {
  return BigNumber.from(await caver.rpc.klay.getBalance(address));
}
