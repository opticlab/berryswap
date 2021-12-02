import {
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  UnsupportedChainIdError,
  useCaverJsReact,
} from "@sixnetwork/caverjs-react-core";
import { useCallback } from "react";
import { ConnectorNames, connectorsByName } from "../utils/caverJsReact";
import Card from "./Card";

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({
  onClose,
  ...props
}: ConnectWalletModalProps) {
  const { activate } = useCaverJsReact();
  const toast = useToast({
    position: "top-end",
    variant: "solid",
    isClosable: true,
  });
  const login = useCallback(
    async (connectorId: ConnectorNames) => {
      const connector = connectorsByName[connectorId];

      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          toast({
            title: "Unsupported chain",
            status: "error",
            description: "Only Baobab testnet is supported",
          });
        } else {
          toast({
            title: error.name,
            status: "error",
            description: error.message,
          });
        }
      });
      onClose();
    },
    [activate, onClose, toast],
  );

  return (
    <Modal isCentered onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid column={1}>
            {Object.entries(ConnectorNames).map(([key, value]) => (
              <Card
                onClick={() => {
                  login(value);
                }}
                key={key}
              >
                {key}
              </Card>
            ))}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
