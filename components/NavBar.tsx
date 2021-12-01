import {
  Center,
  ColorModeProvider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useBreakpoint } from "@chakra-ui/react";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import DisconnectWalletButton from "./DisconnectWalletButton";
import Logo from "./Logo";
import TokenPrices from "./TokenPrices";

export default function NavBar() {
  const breakpoint = useBreakpoint();
  const { account } = useCaverJsReact();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex
        height="5rem"
        backgroundColor="brand.600"
        textColor="white"
        paddingX="1rem"
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
          <HStack align="center">
            <Text>{colorMode == "light" ? "🌞" : "🌜"}</Text>
            <Switch
              isChecked={colorMode == "dark"}
              onChange={toggleColorMode}
            />
            {breakpoint != "sm" ? <TokenPrices /> : <></>}
            {account ? <DisconnectWalletButton /> : <ConnectWalletButton />}
          </HStack>
        </Center>
      </Flex>
    </header>
  );
}
