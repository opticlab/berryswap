import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useCaverJsReact } from "@sixnetwork/caverjs-react-core";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";
import { useCallback, useMemo } from "react";
import { BASE_SCAN_URLS, Network, networkByChainId } from "../utils/network";

const DisconnectWalletButton: React.FC = () => {
  const { account, deactivate, chainId } = useCaverJsReact();
  const viewOnScan = useCallback(() => {
    if (chainId) {
      const network = networkByChainId[chainId];
      const url = `${BASE_SCAN_URLS[network]}/account/${account}`;

      window.open(url, "_ blank");
    }
  }, [chainId, account]);

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {`${account?.slice(0, 6)}...${account?.slice(account.length - 4)}`}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={viewOnScan}>View on scan</MenuItem>
        <MenuItem onClick={deactivate}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DisconnectWalletButton;
