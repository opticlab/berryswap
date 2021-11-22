import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { CaverJsReactProvider } from "@sixnetwork/caverjs-react-core";
import { getLibrary } from "../utils/caverJsReact";

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";

// 2. Call `extendTheme` and pass your custom values
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CaverJsReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CaverJsReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
