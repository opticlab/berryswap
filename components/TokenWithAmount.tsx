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

const TokenWithAmount: React.FC<TokenWithAmountProps> = ({
  token,
  amount,
  onTokenChanged,
}) => {
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
};

export default TokenWithAmount;
