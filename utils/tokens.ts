const tokens: Token[] = [
  {
    name: "🧱KLAY",
    symbol: "KLAY",
    decimal: 18,
  },
  {
    address: "0x056efc1fc21f2303b2eb459b2bd3c49988bbed4c",
    name: "💵KUSD",
    symbol: "KUSD",
    decimal: 18,
  },
  {
    name: "🍓BERRY",
    symbol: "BERRY",
    decimal: 18,
  },
  {
    name: "🧃JUICE",
    symbol: "JUICE",
    decimal: 18,
  },
];

export interface Token {
  address?: string;
  name: string;
  symbol: string;
  decimal: number;
}

export default tokens;
