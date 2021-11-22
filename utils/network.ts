export enum Network {
  CYPRESS = 8217,
  BAOBAB = 1001,
}

export const networkByChainId: { [id in number]: Network } = {
  [8217]: Network.CYPRESS,
  [1001]: Network.BAOBAB,
}

export const BASE_SCAN_URLS = {
  [Network.CYPRESS]: 'https://scope.klaytn.com',
  [Network.BAOBAB]: 'https://baobab.scope.klaytn.com',
}