import { useEffect, useState } from 'react';

import Card from '@components/ui/Card';
import { Meal } from '@models/meal';
import MealItem from './meal-item/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:3001/meals');
    const responseData = await response.json();
    setMeals(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className='meals__loading'>
        <p>Loading...</p>
      </section>
    );
  }

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
