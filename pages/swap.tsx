import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { Button, Container, IconButton, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import TokenWithAmount from "../components/TokenWithAmount";
import { Field, swapActionState, swapState, TokenAmount } from "../state/swap";
import useToasty from "../utils/toasty";

const Swap: NextPage = () => {
  const [{ tokenA, tokenB }, setSwap] = useRecoilState(swapState);
  const actionState = useRecoilValue(swapActionState);
  const toasty = useToasty();

  const rate = useMemo(() => {
    return 1; // TODO get this from corresponding LP
  }, []);

  const handleTokenAmountChange = useCallback(
    (field: Field, tokenAmount: TokenAmount) => {
      setSwap(({ tokenA, tokenB }) => ({
        tokenA:
          field == Field.INPUT
            ? tokenAmount
            : tokenA
            ? { ...tokenA, amount: tokenAmount.amount.div(rate) }
            : undefined,
        tokenB:
          field == Field.OUTPUT
            ? tokenAmount
            : tokenB
            ? { ...tokenB, amount: tokenAmount.amount.mul(rate) }
            : undefined,
      }));
    },
    [rate, setSwap],
  );

  const handleTokenSwitch = useCallback(() => {
    setSwap(({ tokenA, tokenB, ...state }) => ({
      tokenA: tokenB,
      tokenB: tokenA,
      ...state,
    }));
  }, [setSwap]);

  return (
    <Container size="lg">
      <VStack alignContent="center">
        <TokenWithAmount
          tokenAmount={tokenA}
          onTokenAmountChange={(tokenAmount) =>
            handleTokenAmountChange(Field.INPUT, tokenAmount)
          }
        />
        <IconButton
          icon={<ArrowUpDownIcon />}
          aria-label="switch tokens"
          onClick={handleTokenSwitch}
        />
        <TokenWithAmount
          tokenAmount={tokenB}
          onTokenAmountChange={(tokenAmount) =>
            handleTokenAmountChange(Field.OUTPUT, tokenAmount)
          }
        />
        <Button disabled={!actionState.isValid} onClick={toasty}>
          Trade!
        </Button>
      </VStack>
    </Container>
  );
};

export default Swap;
