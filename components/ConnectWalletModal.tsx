import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
  const { account, activate, deactivate } = useCaverJsReact();
  const toast = useToast({ position: "top-end" });
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
    <Modal onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex columns={[1, null, 2]}>
            <Card
              width="50%"
              onClick={() => {
                login(ConnectorNames.Kaikas);
              }}
            >
              <Text>Kaikas</Text>
            </Card>
            <Card
              width="50%"
              onClick={() => {
                login(ConnectorNames.Klip);
              }}
            >
              <Text>Klip</Text>
            </Card>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
