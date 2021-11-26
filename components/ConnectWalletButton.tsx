import { Button, Text, useBreakpoint, useDisclosure } from "@chakra-ui/react";
import ConnectWalletModal from "./ConnectWalletModal";

const ConnectWalletButton: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { onOpen, ...modalProps } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        {breakpoint == "md" ? (
          <Text>Connect Wallet</Text>
        ) : (
          <Text fontWeight="normal">👛</Text>
        )}
      </Button>
      <ConnectWalletModal {...modalProps} />
    </>
  );
};

export default ConnectWalletButton;
