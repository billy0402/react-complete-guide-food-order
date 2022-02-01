import { useContext } from 'react';

import CartIcon from '@icons/CartIcon';
import CartContext from '@store/cartContext';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce(
    (total, item) => total + item.amount,
    0,
  );

  return (
    <button className='button' onClick={onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
