import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import { formatUnits } from "ethers/lib/utils";
import { useCallback, useMemo } from "react";
import { useKlayBalance } from "../hooks/useKlayBalance";
import { BASE_SCAN_URLS, networkByChainId } from "../utils/network";

export default function DisconnectWalletButton() {
  const { account, deactivate, chainId } = useCaverJsReact();
  const viewOnScan = useCallback(() => {
    if (chainId) {
      const network = networkByChainId[chainId];
      const url = `${BASE_SCAN_URLS[network]}/account/${account}`;

      window.open(url, "_ blank");
    }
  }, [chainId, account]);
  const klayBalance = useKlayBalance();
  const formattedBalance = useMemo(
    () => formatUnits(klayBalance),
    [klayBalance],
  );

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {`${account?.slice(0, 6)}...${account?.slice(account.length - 4)}`}
      </MenuButton>
      <MenuList>
        <MenuItem>Klay - {formattedBalance.toString()}</MenuItem>
        <MenuItem onClick={viewOnScan}>View on scan</MenuItem>
        <MenuItem onClick={deactivate}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  );
}
