import { SyntheticEvent, useRef } from 'react';

type CheckoutProps = {
  onCancel: () => void;
};

const Checkout = ({ onCancel }: CheckoutProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostalCode = postalCodeInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
  };

  return (
    <form className='checkout__form' onSubmit={confirmHandler}>
      <div className='checkout__control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='name' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='postal'>Postal code</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
      </div>
      <div className='checkout__control'>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
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
