import { useContext, useState } from 'react';

import Modal from '@components/ui/modal/Modal';
import { CartItem as CartItemType } from '@models/cartItem';
import CartContext from '@store/cartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  const cartContext = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item: CartItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  return (
    <Modal onClose={onClose}>
      <ul className='cart-items'>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>{`$ ${cartContext.totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && (
        <div className='actions'>
          <button className='cart-button--alt' onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className='cart-button' onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
