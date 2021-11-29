import { HStack, Text, useBreakpoint } from "@chakra-ui/react";

export default function Logo() {
  const breakpoint = useBreakpoint();

  return (
    <HStack fontSize="3xl">
      <Text>🍓</Text>
      {breakpoint != "sm" ? (
        <Text fontSize="3xl" fontWeight="bold">
          BerrySwap
        </Text>
      ) : (
        <></>
      )}
    </HStack>
  );
}
