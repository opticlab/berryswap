import { Flex, HStack, Spacer, useBreakpoint } from "@chakra-ui/react";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import Link from "next/link";
import ColorModeSwitch from "./ColorModeSwitch";
import ConnectWalletButton from "./ConnectWalletButton";
import Logo from "./Logo";
import TokenPrices from "./TokenPrices";
import WalletButton from "./WalletButton";

export default function NavBar() {
  const breakpoint = useBreakpoint();
  const { account } = useCaverJsReact();

  return (
    <header>
      <Flex
        height="5rem"
        backgroundColor="brand.600"
        textColor="white"
        paddingX="1rem"
        align="center"
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <HStack px="2rem">
          <Link href="/swap">Swap</Link>
          <Link href="/liquidity">Liquidity</Link>
        </HStack>
        <Spacer />
        <HStack align="center">
          <ColorModeSwitch />
          {breakpoint != "sm" && <TokenPrices />}
          {account ? <WalletButton /> : <ConnectWalletButton />}
        </HStack>
      </Flex>
    </header>
  );
}
