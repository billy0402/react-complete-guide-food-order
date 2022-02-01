import { SyntheticEvent, useRef, useState } from 'react';

import Input from '@components/ui/Input';

type MealItemFormProps = {
  id: string;
  onAddToCart: (amount: number) => void;
};

const MealItemForm = ({ id, onAddToCart }: MealItemFormProps) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!amountInputRef.current) {
      return;
    }

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      !enteredAmount.trim() ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1 ~ 5).</p>}
    </form>
  );
};

export default MealItemForm;
