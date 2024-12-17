import { Trash } from "@phosphor-icons/react";
import { CartItems, ConfirmationContainer } from "./style";
import { useTheme } from "styled-components";
import { QuantyProductsContext } from "../../../../context/QuantyProducts";
import { ConfirmOrder } from "../ConfirmOrder";
import { useSafeContext } from "../../../../utils/useSafeContext";

export function CartConfirmation() {
  const theme = useTheme();

  const context = useSafeContext(
    QuantyProductsContext,
    "QuantyProductsContext não foi encontrado. Verifique se está dentro do provider."
  );

  const {
    cartItems,
    quantities,
    handleDecrementCart,
    handleIncrementCart,
    removeFromCart,
  } = context;

  return (
    <ConfirmationContainer>
      {cartItems.map((item) => (
        <CartItems key={item.id}>
          <img src={item.img} alt='' />
          <div>
            <p>{item.name}</p>
            <div>
              <div>
                <button onClick={() => handleDecrementCart(item.id)}>-</button>
                <span>{quantities[item.id] || 0}</span>
                <button onClick={() => handleIncrementCart(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                <Trash color={theme.colors["purple-dark"]} />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
          <span>{item.price}</span>
        </CartItems>
      ))}
      <ConfirmOrder />
    </ConfirmationContainer>
  );
}
