import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack align="center">
      <Text>{colorMode == "light" ? "🌞" : "🌜"}</Text>
      <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />;
    </HStack>
  );
}
