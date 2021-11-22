import { InjectedConnector } from "@sixnetwork/caverjs-react-injected-connector";
import { CaverProvider } from "klaytn-providers";

const POLLING_INTERVAL = 12000;

const chainId = 1001;

const kaikas = new InjectedConnector({ supportedChainIds: [1001, 8217] });

export enum ConnectorNames {
  Kaikas = "kaikas",
  Klip = "klip",
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Kaikas]: kaikas,
  [ConnectorNames.Klip]: undefined,
};

export const getLibrary = (provider: any): CaverProvider => {
  const library = new CaverProvider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
