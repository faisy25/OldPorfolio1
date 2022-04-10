import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import store from "./store";
import theme from "./theme";

ReactDom.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
    ,
  </Provider>,
  document.querySelector("#root")
);
