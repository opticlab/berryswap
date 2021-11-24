import { Button, Container, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useMemo, useState } from "react";
import TokenWithAmount from "../components/TokenWithAmount";
import tokens, { Token } from "../utils/tokens";

const Swap: NextPage = () => {
  const [selectedTokenA, setSelectedTokenA] = useState<Token | undefined>(
    tokens[0],
  );
  const [selectedTokenB, setSelectedTokenB] = useState<Token | undefined>();

  return (
    <Container size="lg">
      <VStack>
        <TokenWithAmount
          token={selectedTokenA}
          onTokenChanged={setSelectedTokenA}
        />
        <TokenWithAmount
          token={selectedTokenB}
          onTokenChanged={setSelectedTokenB}
        />
        <Button
          disabled={selectedTokenA == undefined || selectedTokenB == undefined}
        >
          Trade!
        </Button>
      </VStack>
    </Container>
  );
};

export default Swap;
