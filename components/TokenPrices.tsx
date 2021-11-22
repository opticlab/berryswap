import { Text, HStack, Button } from "@chakra-ui/react";
import BerryTokenLogo from "./BerryTokenLogo";
import Card from "./Card";
import JuiceTokenLogo from "./JuiceTokenLogo";

const TokenPrices: React.FC = () => {
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
};

export default TokenPrices;
