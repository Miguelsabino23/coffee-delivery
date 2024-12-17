import { ShoppingCart } from "@phosphor-icons/react";
import { ContainerListCoff, HomeContainer } from "./style";
import { CoffList } from "./components/CoffList";
import { ListCoff } from "../../data/coffeData";
import { ListCoffee } from "./style";
import { InfoCoff } from "./components/InfoCoff";
import { QuantyProductsContext } from "../../context/QuantyProducts";
import { useSafeContext } from "../../utils/useSafeContext";

export function Home() {
  const context = useSafeContext(
    QuantyProductsContext,
    "QuantyProductsContext não foi encontrado. Verifique se está dentro do provider."
  );

  const { quantities, handleIncrement, handleDecrement } = context;

  return (
    <HomeContainer>
      <InfoCoff />

      <ContainerListCoff>
        <h2>Nossos Cafés</h2>
        <ListCoffee>
          {ListCoff.map((coffee) => (
            <CoffList
              id={coffee.id}
              key={coffee.id}
              img={coffee.img}
              type={coffee.type}
              coff={coffee.coff}
              infoCoff={coffee.info}
              priceCoff={coffee.price}
              quantities={quantities[coffee.id] || 0}
              increment={() => handleIncrement(coffee.id)}
              decrement={() => handleDecrement(coffee.id)}
              IconCart={ShoppingCart}
            />
          ))}
        </ListCoffee>
      </ContainerListCoff>
    </HomeContainer>
  );
}
