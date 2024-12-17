import { CartConfirmation } from "./components/CartConfirmation";
import { CompleteOrder } from "./components/CompleteOrder";
import {
  ContainerCompleteYourOrder,
  ContainerConfirmYourOrder,
  Checkout,
} from "./style";

export function Cart() {
  return (
    <Checkout>
      <ContainerCompleteYourOrder>
        <h2>Complete seu pedido</h2>
        <CompleteOrder />
      </ContainerCompleteYourOrder>
      <ContainerConfirmYourOrder>
        <h2>Confirme seu pedido</h2>
        <CartConfirmation />
      </ContainerConfirmYourOrder>
    </Checkout>
  );
}
