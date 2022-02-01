import { DUMMY_MEALS } from '@fixtures/meals';

const AvailableMeals = () => {
  return (
    <section className='meals'>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
