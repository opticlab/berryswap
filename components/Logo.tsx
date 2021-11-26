import { HStack, Text, useBreakpoint } from "@chakra-ui/react";

export default function Logo() {
  const breakpoint = useBreakpoint();

  return (
    <HStack fontSize="3xl">
      <Text>🍓</Text>
      {breakpoint == "md" ? (
        <Text fontSize="3xl" fontWeight="bold">
          BerrySwap
        </Text>
      ) : (
        <></>
      )}
    </HStack>
  );
}
