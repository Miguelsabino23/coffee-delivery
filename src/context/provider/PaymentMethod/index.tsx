import { ReactNode, useState } from "react";
import { PaymentMethodContext } from "../../PaymentMethodContext";

interface PaymentMethodProviderProps {
  children: ReactNode;
}

export function PaymentMethodProvider({
  children,
}: PaymentMethodProviderProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  function handlePaymentSelection(method: string) {
    setSelectedMethod(method);
  }

  return (
    <PaymentMethodContext.Provider
      value={{ selectedMethod, handlePaymentSelection }}
    >
      {children}
    </PaymentMethodContext.Provider>
  );
}
