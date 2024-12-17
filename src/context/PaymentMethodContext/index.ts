import { createContext } from "react";

interface PaymentMethodContextType {
  handlePaymentSelection: (method: string) => void;
  selectedMethod: string | "";
}

export const PaymentMethodContext = createContext<
  PaymentMethodContextType | undefined
>(undefined);
