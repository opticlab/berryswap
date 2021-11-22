import {
    Flex,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalProps,
    useToast,
    useDisclosure
} from '@chakra-ui/react'
import { UnsupportedChainIdError, useCaverJsReact } from '@sixnetwork/caverjs-react-core';
import { Props, useCallback } from 'react';
import { ConnectorNames, connectorsByName } from '../utils/caverJsReact';
import Card from './Card';

interface ConnectWalletModalProps {
    isOpen: boolean
    onClose: () => void
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ onClose, ...props}) => {
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
      [activate, onClose, toast]
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
  };

  export default ConnectWalletModal