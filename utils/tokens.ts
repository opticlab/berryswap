const tokens: Token[] = [
  {
    name: "🧱KLAY",
    symbol: "KLAY",
    decimals: 18,
  },
  {
    name: "💵KUSD",
    symbol: "KUSD",
    address: "0x056efc1fc21f2303b2eb459b2bd3c49988bbed4c",
    decimals: 18,
  },
  {
    name: "Kay Token",
    symbol: "KAY",
    address: "0x94e5b0a5fe58595a14d123a27ecc1feab4d3f5e0",
    decimals: 16,
  },
  {
    name: "Ross Token",
    symbol: "ROSS",
    address: "0x9f25b88e25f74b711d38c228fabbb5178b5f6864",
    decimals: 8,
  },
  {
    name: "Damon Token",
    symbol: "DAMON",
    address: "0x66f80d658792765ae76c64c1110d003930797062",
    decimals: 18,
  },
  {
    name: "Luan Token",
    symbol: "LUAN",
    address: "0x99ac0f642821c33edcbeaf079ad691b72b495de0",
    decimals: 6,
  },
  // {
  //   name: "🍓BERRY",
  //   symbol: "BERRY",
  //   decimal: 18,
  // },
  // {
  //   name: "🧃JUICE",
  //   symbol: "JUICE",
  //   decimal: 18,
  // },
];

export interface Token {
  name: string;
  symbol: string;
  address?: string;
  decimals: number;
}

export default tokens;
