import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: "#f3ebff",
      100: "#d6c8ec",
      200: "#b9a5db",
      300: "#9d81cb",
      400: "#815dbb",
      500: "#6744a2",
      600: "#50357f",
      700: "#39255c",
      800: "#221639",
      900: "#0d0619",
    },
  },
});

export default theme