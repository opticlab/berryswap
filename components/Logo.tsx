import { HStack, Text } from "@chakra-ui/layout";

const Logo: React.FC = (props) => {
  return (
    <HStack {...props} fontSize="3xl">
      <Text>🍓</Text>
      <Text fontSize="3xl" fontWeight="bold">
        BerrySwap
      </Text>
    </HStack>
  );
};

export default Logo;
