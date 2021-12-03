import {
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BigNumber } from "ethers";
import { useCallback, useMemo } from "react";
import { TokenAmount } from "../store/swap";
import tokens from "../utils/tokens";
import SelectTokenModal from "./SelectTokenModal";

const BIGNUMBER_ZERO = BigNumber.from(0);

export interface TokenWithAmountProps {
  tokenAmount?: TokenAmount;
  onTokenAmountChange: (tokenAmount: TokenAmount) => void;
}

export default function TokenWithAmount({
  tokenAmount,
  onTokenAmountChange,
}: TokenWithAmountProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tokenList = useMemo(() => Object.values(tokens), []);

  const handleTokenChange = useCallback(
    (token) => {
      onTokenAmountChange({
        token: token,
        amount: BIGNUMBER_ZERO,
      });
    },
    [onTokenAmountChange],
  );
  const handleAmountChange = useCallback(
    (_valueString, valueNumber) => {
      if (tokenAmount) {
        onTokenAmountChange({
          ...tokenAmount,
          amount: !isNaN(valueNumber)
            ? BigNumber.from(valueNumber)
            : BIGNUMBER_ZERO,
        });
      }
    },
    [onTokenAmountChange, tokenAmount],
  );

  return (
    <>
      <InputGroup>
        <NumberInput
          value={
            tokenAmount && tokenAmount.amount.gt(0)
              ? tokenAmount.amount.toString()
              : ""
          }
          onChange={handleAmountChange}
          placeholder="0.0"
          variant="filled"
          isDisabled={!tokenAmount}
        >
          <NumberInputField />
        </NumberInput>
        <InputRightAddon onClick={onOpen}>
          <Text minWidth="4rem">{tokenAmount?.token.name}</Text>
        </InputRightAddon>
      </InputGroup>
      <SelectTokenModal
        isOpen={isOpen}
        onClose={onClose}
        tokens={tokenList}
        selected={tokenAmount?.token}
        onSelect={handleTokenChange}
      />
    </>
  );
}
