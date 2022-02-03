import { useEffect, useState } from 'react';

import Card from '@components/ui/Card';
import { Meal } from '@models/meal';
import MealItem from './meal-item/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = async () => {
    const response = await fetch('http://localhost:3001/meals');
    const responseData = await response.json();
    setMeals(responseData);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <section className='meals'>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
