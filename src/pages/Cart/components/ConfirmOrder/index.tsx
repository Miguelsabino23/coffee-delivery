import { ConfirmOrderContainer } from "./style";
import { QuantyProductsContext } from "../../../../context/QuantyProducts";
import { Link } from "react-router-dom";
import { ViaCepContext } from "../../../../context/ViaCepContext";
import { PaymentMethodContext } from "../../../../context/PaymentMethodContext";
import { useSafeContext } from "../../../../utils/useSafeContext";

export function ConfirmOrder() {
  const contextQuantyProducts = useSafeContext(
    QuantyProductsContext,
    "QuantyProductsContext não foi encontrado. Verifique se está dentro do provider."
  );
  const viaCep = useSafeContext(
    ViaCepContext,
    "ViaCep não foi encontrado. Verifique se está dentro do provider"
  );
  const paymentMethod = useSafeContext(
    PaymentMethodContext,
    "paymentMethod não foi encontrado. Verifique se está dentro do provider"
  );

  const { cartItems, clearCart } = contextQuantyProducts;
  const { cep, address } = viaCep;
  const { selectedMethod } = paymentMethod;

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryValue = 3.59;

  const total = cartTotal + deliveryValue;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <ConfirmOrderContainer>
      <div>
        <span>Total de itens</span>
        <span>{formatCurrency(cartTotal)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>
          {cartTotal > 0 ? formatCurrency(deliveryValue) : formatCurrency(0)}
        </span>
      </div>
      <div>
        <h2>Total</h2>
        <h2>{cartTotal > 0 ? formatCurrency(total) : 0}</h2>
      </div>
      <Link
        to='/success'
        onClick={(e) => {
          if (
            cartTotal <= 0 ||
            cep.length !== 8 ||
            address.number.length === 0 ||
            !selectedMethod
          ) {
            e.preventDefault();
            alert("Preencha todos os campos para continuar!");
          } else {
            clearCart();
          }
        }}
      >
        Confirmar pedido
      </Link>
    </ConfirmOrderContainer>
  );
}
