import { Flex, Spacer, Text } from "@chakra-ui/react";
import { formatUnits } from "@ethersproject/units";
import { useTokenBalance } from "../hooks/useTokenBalance";
import { Token } from "../utils/tokens";

export interface TokenRowProps {
  token: Token;
}

export default function TokenRow({ token }: TokenRowProps) {
  const { name, address, decimals } = token;

  const balance = useTokenBalance(token);

  return (
    <Flex>
      <Text>{name}</Text>
      <Spacer />
      {address && balance ? (
        <Text fontSize="sm">{formatUnits(balance, decimals)}</Text>
      ) : (
        <></>
      )}
    </Flex>
  );
}
