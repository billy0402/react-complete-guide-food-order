import { SyntheticEvent } from 'react';

type CheckoutProps = {
  onCancel: () => void;
};

const Checkout = ({ onCancel }: CheckoutProps) => {
  const confirmHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form className='checkout__form' onSubmit={confirmHandler}>
      <div className='checkout__control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='street'>Street</label>
        <input type='text' id='name' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='postal'>Postal code</label>
        <input type='text' id='postal' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>

      <div className='checkout__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className='checkout__submit-button' type='submit'>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
