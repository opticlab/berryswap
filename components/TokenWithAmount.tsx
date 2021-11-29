import {
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import tokens, { Token } from "../utils/tokens";
import SelectTokenModal from "./SelectTokenModal";

export interface TokenWithAmountProps {
  token?: Token;
  amount?: number;
  onTokenChanged: (token: Token) => void;
}

export default function TokenWithAmount({
  token,
  amount,
  onTokenChanged,
}: TokenWithAmountProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <InputGroup>
        <Input value={amount} placeholder="amount" variant="filled" />
        <InputRightAddon onClick={onOpen}>
          <Text minWidth="4rem">{token?.name}</Text>
        </InputRightAddon>
      </InputGroup>
      <SelectTokenModal
        isOpen={isOpen}
        onClose={onClose}
        tokens={tokens}
        selected={token}
        onSelect={(token) => onTokenChanged(token)}
      />
    </>
  );
}
