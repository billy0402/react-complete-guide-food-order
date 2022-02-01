import mealsImage from '@images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

type HeaderProps = {
  onShowCart: () => void;
};

const Header = ({ onShowCart }: HeaderProps) => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
