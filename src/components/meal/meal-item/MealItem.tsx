import { Meal } from '@models/meal';
import MealItemForm from './MealItemForm';

type MealItemProps = Meal;

const MealItem = ({ id, name, description, price }: MealItemProps) => {
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <span className='description'>{description}</span>
        <span className='price'>{`$ ${price.toFixed(2)}`}</span>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
