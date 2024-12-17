import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { QuantyProductsContextProvider } from "./context/provider/QuantyProductsProvider";
import { ViaCepContextProvider } from "./context/provider/ViaCepProvider";
import { PaymentMethodProvider } from "./context/provider/PaymentMethod";

export function App() {
  return (
    <ViaCepContextProvider>
      <QuantyProductsContextProvider>
        <PaymentMethodProvider>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Router />
              <GlobalStyle />
            </BrowserRouter>
          </ThemeProvider>
        </PaymentMethodProvider>
      </QuantyProductsContextProvider>
    </ViaCepContextProvider>
  );
}
