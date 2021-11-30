import {
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BigNumber } from "ethers";
import { useCallback } from "react";
import { TokenAmount } from "../state/swap";
import tokens from "../utils/tokens";
import SelectTokenModal from "./SelectTokenModal";

export interface TokenWithAmountProps {
  tokenAmount?: TokenAmount;
  onTokenAmountChange: (tokenAmount?: TokenAmount) => void;
}

export default function TokenWithAmount({
  tokenAmount,
  onTokenAmountChange,
}: TokenWithAmountProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTokenChange = useCallback(
    (token) => {
      onTokenAmountChange({
        token: token,
        amount: BigNumber.from(0),
      });
    },
    [onTokenAmountChange],
  );
  const handleAmountChange = useCallback(
    (valueString) => {
      if (tokenAmount) {
        onTokenAmountChange({
          ...tokenAmount,
          amount: BigNumber.from(valueString),
        });
      }
    },
    [onTokenAmountChange, tokenAmount],
  );

  return (
    <>
      <InputGroup>
        <NumberInput
          value={tokenAmount?.amount.toString()}
          onChange={handleAmountChange}
          placeholder="amount"
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
        tokens={tokens}
        selected={tokenAmount?.token}
        onSelect={handleTokenChange}
      />
    </>
  );
}
