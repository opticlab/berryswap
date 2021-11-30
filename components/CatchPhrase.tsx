import { BoxProps, Heading, HStack, Text } from "@chakra-ui/react";

export default function CatchPhrase(props: BoxProps) {
  return (
    <Heading as="h1" size="4xl" {...props}>
      <HStack>
        <Text>Everybody loves </Text>
        <Text fontWeight="normal">🍓</Text>
        <Text> much!</Text>
      </HStack>
    </Heading>
  );
}
