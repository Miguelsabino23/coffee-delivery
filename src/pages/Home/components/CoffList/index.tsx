import { IconProps } from "@phosphor-icons/react";
import { BackgroundCart, Buy, CoffListContainer, Type } from "./style";
import { ComponentType } from "react";
import { QuantyProductsContext } from "../../../../context/QuantyProducts";
import { useSafeContext } from "../../../../utils/useSafeContext";

interface CoffListProps {
  id: string;
  img: string;
  type: string[];
  coff: string;
  infoCoff: string;
  priceCoff: number;
  quantities: number;
  increment: () => void;
  decrement: () => void;
  IconCart: ComponentType<IconProps>;
}

export function CoffList({
  id,
  img,
  type,
  coff,
  infoCoff,
  priceCoff,
  quantities,
  increment,
  decrement,
  IconCart,
}: CoffListProps) {
  const context = useSafeContext(
    QuantyProductsContext,
    "QuantyProductsContext não foi encontrado. Verifique se está dentro do provider."
  );

  const { addToCart } = context;

  return (
    <CoffListContainer>
      <img src={img} alt='' />
      <div>
        {type.map((tag) => (
          <Type key={tag}>{tag}</Type>
        ))}
      </div>
      <h3>{coff}</h3>
      <p>{infoCoff}</p>
      <Buy>
        <span>R${priceCoff}</span>
        <div>
          <button onClick={decrement}>-</button>
          <span>{quantities}</span>
          <button onClick={increment}>+</button>
          <BackgroundCart>
            <IconCart
              color='#fff'
              weight='fill'
              onClick={() => addToCart(id, coff, priceCoff, img || "")}
            />
          </BackgroundCart>
        </div>
      </Buy>
    </CoffListContainer>
  );
}
