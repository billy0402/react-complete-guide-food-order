import React from 'react';

import { CartItem } from '@models/cartItem';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
});

export default CartContext;