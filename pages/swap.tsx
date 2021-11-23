import { Button, Container, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useMemo, useState } from "react";
import TokenWithAmount from "../components/TokenWithAmount";

const Swap: NextPage = () => {
  const tokens = useMemo(() => {
    return ["🧱KLAY", "💵KUSD", "🍓BERRY", "🧃JUICE"];
  }, []);
  const [selectedTokenA, setSelectedTokenA] = useState<string | undefined>(
    tokens[0],
  );
  const [selectedTokenB, setSelectedTokenB] = useState<string | undefined>();

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
