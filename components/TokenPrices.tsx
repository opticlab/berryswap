import { Button, HStack, Text } from "@chakra-ui/react";
import BerryTokenLogo from "./BerryTokenLogo";
import JuiceTokenLogo from "./JuiceTokenLogo";

export default function TokenPrices() {
  return (
    <HStack>
      <Button>
        <HStack>
          <BerryTokenLogo />
          <Text>BERRY $1</Text>
        </HStack>
      </Button>
      <Button>
        <HStack>
          <JuiceTokenLogo />
          <Text>JUICE $5</Text>
        </HStack>
      </Button>
    </HStack>
  );
}
