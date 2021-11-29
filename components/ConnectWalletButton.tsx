import { Button, Text, useBreakpoint, useDisclosure } from "@chakra-ui/react";
import ConnectWalletModal from "./ConnectWalletModal";

export default function ConnectWalletButton() {
  const breakpoint = useBreakpoint();
  const { onOpen, ...modalProps } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        {breakpoint != "sm" ? (
          <Text>Connect Wallet</Text>
        ) : (
          <Text fontWeight="normal">👛</Text>
        )}
      </Button>
      <ConnectWalletModal {...modalProps} />
    </>
  );
}
