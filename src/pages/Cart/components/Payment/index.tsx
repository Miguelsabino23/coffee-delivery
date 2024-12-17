import { TextDelivery } from "../CompleteOrder/style";
import { PaymentMethod } from "./PaymentMethod";
import {
  PaymentContainer,
  PaymentInformation,
  PaymentMethodContainer,
} from "./style";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentMethodContext } from "../../../../context/PaymentMethodContext";
import { useSafeContext } from "../../../../utils/useSafeContext";

export function Payment() {
  const context = useSafeContext(
    PaymentMethodContext,
    "PaymentMethodContext não foi encontrado. Verifique se está dentro do provider"
  );

  const { handlePaymentSelection } = context;

  return (
    <PaymentContainer>
      <PaymentInformation>
        <div>
          <CurrencyDollar size={20} />
        </div>
        <TextDelivery>
          <h2>Pagamento</h2>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </TextDelivery>
      </PaymentInformation>
      <PaymentMethodContainer>
        <PaymentMethod
          Icon={CreditCard}
          method='CARTÃO DE CRÈDITO'
          onClick={handlePaymentSelection}
        />
        <PaymentMethod
          Icon={Bank}
          method='CARTÃO DE DÉBITO'
          onClick={handlePaymentSelection}
        />
        <PaymentMethod
          Icon={Money}
          method='DINHEIRO'
          onClick={handlePaymentSelection}
        />
      </PaymentMethodContainer>
    </PaymentContainer>
  );
}
