import { Center, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import ConnectWalletButton from "./ConnectWalletButton";
import DisconnectWalletButton from "./DisconnectWalletButton";
import Logo from "./Logo";
import TokenPrices from "./TokenPrices";

const NavBar: React.FC = () => {
  const { account } = useCaverJsReact();

  return (
    <Flex
      height="5vh"
      backgroundColor="#3e2f6f"
      textColor="white"
      paddingX="1vw"
    >
      <Center>
        <Link href="/">
          <Logo />
        </Link>
      </Center>
      <HStack px="2rem">
        <Center>
          <Link href="/swap">Swap</Link>
        </Center>
        <Center>
          <Link href="/liquidity">Liquidity</Link>
        </Center>
      </HStack>
      <Spacer />
      <Center>
        <HStack>
          <TokenPrices />
          {account ? <DisconnectWalletButton /> : <ConnectWalletButton />}
        </HStack>
      </Center>
    </Flex>
  );
};

export default NavBar;
