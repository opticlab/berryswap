import { ChakraProvider } from "@chakra-ui/react";
import { CaverJsReactProvider } from "@sixnetwork/caverjs-react-core";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import theme from "../theme";
import { getLibrary } from "../utils/caverJsReact";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <CaverJsReactProvider getLibrary={getLibrary}>
          {children}
        </CaverJsReactProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
