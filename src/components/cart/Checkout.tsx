import { SyntheticEvent, useRef, useState } from 'react';

import { User } from '@models/user';

const isEmpty = (value: string) => value.trim() === '';
const isLimitChars = (value: string, limitLength: number) =>
  value.trim().length === limitLength;

type CheckoutProps = {
  onConfirm: (user: User) => void;
  onCancel: () => void;
};

const Checkout = ({ onConfirm, onCancel }: CheckoutProps) => {
  const [formInputValidity, setFormInputValidity] = useState<{
    [key: string]: boolean;
  }>({
    name: false,
    street: false,
    postalCode: false,
    city: false,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (
      !nameInputRef.current ||
      !streetInputRef.current ||
      !postalCodeInputRef.current ||
      !cityInputRef.current
    ) {
      throw Error('inputRef is not assigned');
    }

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const isNameValid = !isEmpty(enteredName);
    const isStreetValid = !isEmpty(enteredStreet);
    const isPostalCodeValid =
      !isEmpty(enteredPostalCode) && isLimitChars(enteredPostalCode, 5);
    const isCityValid = !isEmpty(enteredCity);
    setFormInputValidity({
      name: isNameValid,
      street: isStreetValid,
      postalCode: isPostalCodeValid,
      city: isCityValid,
    });

    const isFormValid =
      isNameValid && isStreetValid && isPostalCodeValid && isCityValid;
    if (!isFormValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const invalidControlClass = (field: string) =>
    formInputValidity[field] ? '' : ' checkout__control--invalid';

  return (
    <form className='checkout__form' onSubmit={confirmHandler}>
      <div className={`checkout__control${invalidControlClass('name')}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputValidity.name && <p>Please input a valid name!</p>}
      </div>
      <div className={`checkout__control${invalidControlClass('street')}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='name' />
        {!formInputValidity.street && <p>Please input a valid street!</p>}
      </div>
      <div className={`checkout__control${invalidControlClass('postalCode')}`}>
        <label htmlFor='postal'>Postal code</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
        {!formInputValidity.postalCode && (
          <p>Please input a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={`checkout__control${invalidControlClass('city')}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputValidity.city && <p>Please input a valid city!</p>}
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
