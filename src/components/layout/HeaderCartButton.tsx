import CartIcon from '@icons/CartIcon';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  return (
    <button className='button' onClick={onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default HeaderCartButton;
