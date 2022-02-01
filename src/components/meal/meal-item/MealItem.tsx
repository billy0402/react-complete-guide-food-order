import { useContext } from 'react';

import { Meal } from '@models/meal';
import CartContext from '@store/cartContext';
import MealItemForm from './MealItemForm';

type MealItemProps = { meal: Meal };

const MealItem = ({ meal }: MealItemProps) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({ ...meal, amount });
  };

  return (
    <li className='meal'>
      <div>
        <h3>{meal.name}</h3>
        <span className='description'>{meal.description}</span>
        <span className='price'>{`$ ${meal.price.toFixed(2)}`}</span>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
