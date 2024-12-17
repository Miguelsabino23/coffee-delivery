import { Aside, CartItemCount, HeaderContainer } from "./style";
import logoCoff from "../../assets/logoCoff.png";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { QuantyProductsContext } from "../../context/QuantyProducts";
import { useSafeContext } from "../../utils/useSafeContext";

export function Header() {
  const context = useSafeContext(
    QuantyProductsContext,
    "QuantyProductsContext não foi encontrado. Verifique se está dentro do provider."
  );

  const { totalItemsInCart } = context;

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logoCoff} alt='Coffee Delivery' />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight='fill' />
          <span>Nova Iguaçu, RJ</span>
        </div>

        <Link to='/cart'>
          {totalItemsInCart > 0 && (
            <CartItemCount>{totalItemsInCart}</CartItemCount>
          )}
          <ShoppingCart size={22} weight='fill' />
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
