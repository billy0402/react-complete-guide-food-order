import { useContext, useEffect, useState } from 'react';

import CartIcon from '@icons/CartIcon';
import CartContext from '@store/cartContext';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  const cartContext = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const { items } = cartContext;

  useEffect(() => {
    if (!items.length) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce(
    (total, item) => total + item.amount,
    0,
  );

  return (
    <button
      className={`button${isButtonHighlighted ? ' bump' : ''}`}
      onClick={onClick}
    >
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
