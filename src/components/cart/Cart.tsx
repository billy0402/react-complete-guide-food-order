import { DUMMY_CART_ITEMS } from '@fixtures/cartItems';

const Cart = () => {
  return (
    <div>
      <ul className='cart-items'>
        {DUMMY_CART_ITEMS.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </div>
    </div>
  );
};

export default Cart;
