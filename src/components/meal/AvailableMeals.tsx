import Card from '@components/ui/Card';
import { DUMMY_MEALS } from '@fixtures/meals';
import MealItem from './meal-item/MealItem';

const AvailableMeals = () => {
  return (
    <section className='meals'>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
