import { CartItem as CartItemType } from '@models/cartItem';

type CartItemProps = {
  item: CartItemType;
  onAdd: () => void;
  onRemove: () => void;
};

const CartItem = ({ item, onAdd, onRemove }: CartItemProps) => {
  const price = `$ ${item.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{item.name}</h2>
        <div className='cart-item__summary'>
          <span className='cart-item__price'>{price}</span>
          <span className='cart-item__amount'>x {item.amount}</span>
        </div>
      </div>
      <div className='cart-item__actions'>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
