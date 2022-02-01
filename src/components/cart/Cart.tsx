import Modal from '@components/ui/modal/Modal';
import { DUMMY_CART_ITEMS } from '@fixtures/cartItems';

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  return (
    <Modal onClose={onClose}>
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
        <button className='cart-button--alt' onClick={onClose}>
          Close
        </button>
        <button className='cart-button'>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
