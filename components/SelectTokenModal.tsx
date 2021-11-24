import {
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Token } from "../utils/tokens";

export interface SelectTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: Token[];
  selected?: Token;
  onSelect: (token: Token) => void;
}

const SelectTokenModal: React.FC<SelectTokenModalProps> = ({
  tokens,
  selected,
  onSelect,
  ...props
}) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Token</ModalHeader>
        <ModalBody>
          <List>
            {tokens.map((token) => (
              <ListItem
                bg={token === selected ? "brand.400" : "brand.800"}
                height="4rem"
                fontSize="lg"
                key={token.address}
                p="1rem"
                justifyContent="center"
                onClick={() => {
                  onSelect(token);
                  props.onClose();
                }}
              >
                {token.name}
              </ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectTokenModal;
