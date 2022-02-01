type BackdropProps = {
  onClose: () => void;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className='backdrop' onClick={onClose} />;
};

export default Backdrop;
