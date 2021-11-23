import {
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import tokens from "../utils/tokens";
import SelectTokenModal from "./SelectTokenModal";

export interface TokenWithAmountProps {
  token?: string;
  amount?: number;
  onTokenChanged: (token: string) => void;
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
          <Text minWidth="4rem">{token}</Text>
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
