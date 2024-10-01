import { Aside, HeaderContainer } from "./style";
import logoCoff from "../../assets/logoCoff.png";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
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
          <ShoppingCart size={22} weight='fill' />
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
