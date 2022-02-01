import Modal from '@components/ui/modal/Modal';
import { DUMMY_CART_ITEMS } from '@fixtures/cartItems';

const Cart = () => {
  return (
    <Modal>
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
        <button className='cart-button--alt'>Close</button>
        <button className='cart-button'>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
