import React from 'react';

import { CartItem } from '@models/cartItem';

const CartContext = React.createContext({
  items: [] as CartItem[],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
  clearItems: () => {},
});

export default CartContext;
