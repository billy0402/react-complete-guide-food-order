import { Meal } from '@models/meal';

type MealItemProps = Meal;

const MealItem = ({ name, description, price }: MealItemProps) => {
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <span className='description'>{description}</span>
        <span className='price'>{`$ ${price.toFixed(2)}`}</span>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
