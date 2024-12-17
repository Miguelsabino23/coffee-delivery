import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  IconCartContainer,
  IconCoffeContainer,
  IconPackageContainer,
  IconTimerContainer,
  InfoCoffContainer,
  ItensContainer,
} from "./style";

import coffeHome from "../../../../assets/coffeHome.png";

export function InfoCoff() {
  return (
    <InfoCoffContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivey você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div>
          <img src={coffeHome} alt='' />
        </div>
      </div>
      <ItensContainer>
        <IconCartContainer>
          <ShoppingCart weight='fill' />
        </IconCartContainer>
        <p>Compra simples e segura</p>

        <IconPackageContainer>
          <Package weight='fill' />
        </IconPackageContainer>
        <p>Embalagem mantém o café intacto</p>
      </ItensContainer>

      <ItensContainer>
        <IconTimerContainer>
          <Timer weight='fill' />
        </IconTimerContainer>
        <p>Entrega rápida e rastreada</p>

        <IconCoffeContainer>
          <Coffee weight='fill' />
        </IconCoffeContainer>
        <p>O café chega fresquinho até você</p>
      </ItensContainer>
    </InfoCoffContainer>
  );
}
