import { useReducer } from 'react';

import { CartItem } from '@models/cartItem';
import CartContext from './cartContext';
import cartReducer, { defaultCartState } from './cartReducer';

type CartProviderProps = {
  children?: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItem) => {
    dispatch({ type: 'ADD', payload: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearItemsFromCartHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
