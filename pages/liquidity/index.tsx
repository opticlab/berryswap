import {
  Badge,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useMemo } from "react";
import tokens, { Token } from "../../utils/tokens";

type LiquidityPair = {
  address: string;
  tokenA: Token;
  tokenB: Token;
};

const Liquidity: NextPage = () => {
  const liquidities: LiquidityPair[] = useMemo(() => {
    return [
      {
        address: "0x0",
        tokenA: tokens.klay,
        tokenB: tokens.kay,
      },
      {
        address: "0x0",
        tokenA: tokens.kay,
        tokenB: tokens.ross,
      },
      {
        address: "0x0",
        tokenA: tokens.klay,
        tokenB: tokens.berry,
      },
      {
        address: "0x0",
        tokenA: tokens.berry,
        tokenB: tokens.juice,
      },
    ];
  }, []);

  return (
    <VStack align="center">
      <Heading>Your Liquidity</Heading>
      {liquidities.length > 0 ? (
        <List>
          {liquidities.map((lp: LiquidityPair) => {
            return (
              <ListItem key={lp.address}>
                <HStack>
                  <Badge>{lp.tokenA.name}</Badge>
                  <Badge>{lp.tokenB.name}</Badge>
                </HStack>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Text>No liquidity found.</Text>
      )}
      <Link href="/liquidity/add">
        <a>
          <Button>Add Liquidity</Button>
        </a>
      </Link>
    </VStack>
  );
};

export default Liquidity;
