import { CartItem } from '@models/cartItem';
import CartContext from './cartContext';

type CartProviderProps = {
  children?: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const addItemToCartHandler = (item: CartItem) => {};

  const removeItemFromCartHandler = (id: string) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
