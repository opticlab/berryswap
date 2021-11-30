import { Button, Container, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import TokenWithAmount from "../components/TokenWithAmount";
import { swapActionState, swapState, TokenAmount } from "../state/swap";
import useToasty from "../utils/toasty";

const Swap: NextPage = () => {
  const [{ tokenA, tokenB }, setSwap] = useRecoilState(swapState);
  const actionState = useRecoilValue(swapActionState);
  const toasty = useToasty();

  const onAChange = useCallback(
    (tokenAmount?: TokenAmount) => {
      setSwap((old) => ({
        ...old,
        tokenA: tokenAmount,
      }));
    },
    [setSwap],
  );

  const onBChange = useCallback(
    (tokenAmount?: TokenAmount) => {
      setSwap((old) => {
        return {
          ...old,
          tokenB: tokenAmount,
        };
      });
    },
    [setSwap],
  );

  return (
    <Container size="lg">
      <VStack>
        <TokenWithAmount tokenAmount={tokenA} onTokenAmountChange={onAChange} />
        <TokenWithAmount tokenAmount={tokenB} onTokenAmountChange={onBChange} />
        <Button disabled={!actionState.isValid} onClick={toasty}>
          Trade!
        </Button>
      </VStack>
    </Container>
  );
};

export default Swap;
