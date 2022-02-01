import Input from '@components/ui/Input';

type MealItemFormProps = {
  id: string;
};

const MealItemForm = ({ id }: MealItemFormProps) => {
  return (
    <form className='form'>
      <Input
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
    </form>
  );
};

export default MealItemForm;
