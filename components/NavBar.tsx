import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import DisconnectWalletButton from "./DisconnectWalletButton";
import Logo from "./Logo";
import TokenPrices from "./TokenPrices";

const NavBar: React.FC = () => {
  const { account } = useCaverJsReact();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex
        height="5vh"
        backgroundColor="brand.600"
        textColor="white"
        paddingX="1vw"
      >
        <Center>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Center>
        <HStack px="2rem">
          <Center>
            <Link href="/swap">
              <a>Swap</a>
            </Link>
          </Center>
          <Center>
            <Link href="/liquidity">
              <a>Liquidity</a>
            </Link>
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
    </header>
  );
};

export default NavBar;
