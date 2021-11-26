import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useModal } from "@chakra-ui/modal";
import ConnectWalletModal from "./ConnectWalletModal";

const ConnectWalletButton: React.FC = () => {
  const { onOpen, ...modalProps } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Connect Wallet</Button>
      <ConnectWalletModal {...modalProps} />
    </>
  );
};

export default ConnectWalletButton;
