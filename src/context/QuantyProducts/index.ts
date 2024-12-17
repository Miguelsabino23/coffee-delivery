import { createContext } from "react";
import { CartItem } from "../provider/QuantyProductsProvider";

interface QuantyProductsContextType {
  quantities: { [key: string]: number };
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
  handleIncrementCart: (id: string) => void;
  handleDecrementCart: (id: string) => void;
  addToCart: (id: string, name: string, price: number, img: string) => void;
  removeFromCart: (itemId: string) => void;
  totalItemsInCart: number;
  cartItems: CartItem[];
  clearCart: () => void;
}

export const QuantyProductsContext = createContext<
  QuantyProductsContextType | undefined
>(undefined);
