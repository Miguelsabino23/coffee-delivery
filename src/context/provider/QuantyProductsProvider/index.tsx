import { ReactNode, useState } from "react";
import { QuantyProductsContext } from "../../QuantyProducts";

interface QuantyProductsContextProviderProps {
  children: ReactNode;
}

export interface CartItem {
  quantity: number;
  id: string;
  name: string;
  price: number;
  img: string;
}

export function QuantyProductsContextProvider({
  children,
}: QuantyProductsContextProviderProps) {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function clearCart() {
    setCartItems([]);
    setQuantities({});
    setTotalItemsInCart(0);
  }

  //Função de incremento de produtos
  function handleIncrement(id: string) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  //Função de decremento de produtos
  function handleDecrement(id: string) {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  }

  function handleIncrementCart(id: string) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );

    setTotalItemsInCart((prev) => prev + 1);
  }

  function handleDecrementCart(id: string) {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
          : item
      )
    );

    setTotalItemsInCart((prev) => (quantities[id] > 0 ? prev - 1 : prev));
  }

  function addToCart(id: string, name: string, price: number, img: string) {
    const quantity = quantities[id] || 0;

    if (quantity > 0) {
      setCartItems((prev) => {
        const itemIndex = prev.findIndex((item) => item.id === id);

        if (itemIndex >= 0) {
          const updatedItems = [...prev];
          updatedItems[itemIndex].quantity += quantity;
          return updatedItems;
        }

        return [...prev, { id, name, price, quantity, img }];
      });

      setTotalItemsInCart((prev) => prev + quantity);
    }
  }

  function removeFromCart(itemId: string) {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== itemId);

      const newTotalItems = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setTotalItemsInCart(newTotalItems);

      return updatedCart;
    });

    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  }

  return (
    <QuantyProductsContext.Provider
      value={{
        quantities,
        handleIncrement,
        handleDecrement,
        addToCart,
        totalItemsInCart,
        cartItems,
        removeFromCart,
        handleIncrementCart,
        handleDecrementCart,
        clearCart,
      }}
    >
      {children}
    </QuantyProductsContext.Provider>
  );
}
